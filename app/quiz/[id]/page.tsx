"use client";

import * as S from "@/app/styles";
import { QuizCoverImage } from "@/components/Quiz/CoverImage";
import { Score, ScoreRow } from "@/components/Score";
import { Button } from "@/components/global/Button";
import { useAlert } from "@/context/useAlert";
import {
  CustomCollectionName,
  QuizScoresName,
  appendToDatabase,
  getDocument,
} from "@/firebase/getData";
import { CustomType, QuizGuess, QuizScore } from "@/types/type";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const QuizContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuizSliderItem = styled.div`
  width: 100%;
  padding: 16px 0;
  border-bottom: 1px solid #e2e7e9;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

const QuizMinMaxCaption = styled.small`
  display: flex;
  color: #778288;
  justify-content: space-between;
`;

const GuessButton = styled(Button)`
  position: sticky;
  width: 100%;
  bottom: 16px;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

const AlertContainer = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MAX_GUESS_COUNT = 5;

const scoreEmoji = (score: number) => {
  if (score >= 75) return "🟩";
  if (score >= 50) return "🟨";
  if (score >= 25) return "🟧";
  if (score >= 0) return "🟥";
  return "🟫";
};

const guessesToEmojiContent = (quiz: CustomType, guesses: QuizGuess[]) => {
  return [
    `Foodle ${guesses.length}/${MAX_GUESS_COUNT} ${quiz.name}`,
    "",
    ...guesses.map((guess) => {
      const { score } = guess;
      const guessResultEmoji = score === 100 ? "🥳" : "🤔";
      return `${guessResultEmoji}${scoreEmoji(score)} ${score}pts`;
    }),
    "",
    `https://lgtm.sft.sh/quiz/${quiz.id}`,
  ].join("\n");
};

const guessesToScore = (guesses: QuizGuess[]) => {
  const maxScore = Math.max(...guesses.map((guess) => guess.score));
  if (maxScore >= 100) return "Genius!";
  if (maxScore >= 90) return "Magnificent";
  if (maxScore >= 80) return "Impressive";
  if (maxScore >= 70) return "Splendid";
  if (maxScore >= 60) return "Great";
  if (maxScore >= 50) return "Good";
  return "Phew";
};

export default function Page({ params }: { params: { id: string } }) {
  const { data: session } = useSession();
  const { openAlert, closeAlert } = useAlert();
  const randomGuesses = () =>
    new Array(MAX_GUESS_COUNT)
      .fill(undefined)
      .map(() => ({ score: Math.floor(Math.random() * 101) }));

  const [guesses, setGuesses] = useState<QuizGuess[]>([]);
  const [randomDummyGuesses, setRandomDummyGuesses] = useState<QuizGuess[]>(
    randomGuesses()
  );

  const [guessingValue, setGuessingValue] = useState<number[]>([]);
  const [quiz, setQuiz] = useState<CustomType>();

  const fetchQuiz = useCallback(async () => {
    try {
      const res = await getDocument<CustomType>(
        CustomCollectionName,
        params.id
      );
      setQuiz(res);
    } catch (e) {
      console.log(e);
    }
  }, [params.id]);

  useEffect(() => {
    fetchQuiz();
  }, [fetchQuiz]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomDummyGuesses(randomGuesses());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const doGuess = useCallback(() => {
    if (!quiz) return;
    // 점수 = min(100, 110 - (오차의 합(%)) / 파라미터 수) )
    const distances = quiz.options.map((option, i) => {
      const optionDomain = Math.max(1, (option.max || 0) - (option.min || 0));
      const guessedValue = guessingValue[i] ?? optionDomain / 2;
      const diffRatio = Math.min(
        (2 * Math.abs(guessedValue - option.value)) / optionDomain
      );
      return diffRatio * 100;
    });

    const score = Math.floor(
      Math.min(
        100,
        Math.max(
          0,
          110 - distances.reduce((a, b) => a + b, 0) / quiz.options.length
        )
      )
    );

    const newGuesses = [...guesses, { score, guessedValues: guessingValue }];
    setGuesses(newGuesses);

    const success = newGuesses.some((guess) => guess.score === 100);
    const complete = newGuesses.length === MAX_GUESS_COUNT;
    const title = guessesToScore(newGuesses);

    if (success || complete) {
      if (session && session.user) {
        const maxScore = Math.max(...newGuesses.map((guess) => guess.score));
        const maxScoreAtIndex = newGuesses.findIndex(
          (guess) => guess.score === maxScore
        );
        appendToDatabase(QuizScoresName, {
          author: {
            id: session.user.email || "anonymous",
            image: session.user.image || null,
          },
          createdAt: new Date().getTime(),
          maxScore,
          maxScoreAtIndex,
          score: newGuesses.map((x) => x.score),
          customizationId: quiz.id,
        } satisfies QuizScore);
      }
      const content = guessesToEmojiContent(quiz, newGuesses);
      const copyContent = () => {
        navigator.clipboard.writeText(content);
        openAlert(
          <AlertContainer>
            <div style={{ height: 16 }} />
            <h2 className="text-h2 text-center">{title}</h2>
            <p className="text-p text-center">Copied to clipboard.</p>
            <div style={{ height: 16 }} />
            <ButtonsRow>
              <Button
                as="a"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  content
                )}`}
                target="_blank"
                style={{ flex: 1 }}
              >
                Twitter
              </Button>
              <Button
                as="a"
                href={`/quiz/${quiz.id}/ranking`}
                style={{ flex: 1 }}
              >
                Close
              </Button>
            </ButtonsRow>
          </AlertContainer>
        );
      };
      openAlert(
        <AlertContainer>
          <div style={{ height: 16 }} />
          <h2 className="text-h2 text-center">{title}</h2>
          <ScoreRow style={{ width: "100%" }}>
            {new Array(5).fill(undefined).map((_, i) => (
              <Score key={i} score={(newGuesses[i] ?? { score: null }).score} />
            ))}
          </ScoreRow>
          <div style={{ height: 16 }} />
          <ButtonsRow>
            <Button onClick={copyContent} style={{ flex: 1 }}>
              Share
            </Button>
            <Button
              as="a"
              href={`/quiz/${quiz.id}/ranking`}
              style={{ flex: 1 }}
            >
              Close
            </Button>
          </ButtonsRow>
        </AlertContainer>
      );
    }
  }, [quiz, guesses, guessingValue, session, openAlert]);

  if (!quiz) {
    return (
      <>
        <S.Container>
          <div style={{ height: 24 }} />
          <strong>Loading...</strong>
        </S.Container>
      </>
    );
  }

  return (
    <>
      <S.Container>
        <QuizCoverImage url="/gcova.png" />
        <div style={{ height: 24 }} />
        <strong>{quiz.name}</strong>
        <p
          style={{
            color: "#778288",
          }}
        >
          Guess {guesses.length + 1}/{MAX_GUESS_COUNT}
        </p>
        <div style={{ height: 16 }} />
        <ScoreRow>
          {new Array(5).fill(undefined).map((_, i) => (
            <Score
              key={i}
              score={
                (guesses[i] ?? randomDummyGuesses[i] ?? { score: 0 }).score
              }
            />
          ))}
        </ScoreRow>
        <QuizContainer>
          {quiz.options.map((option, i) => (
            <QuizSliderItem key={i}>
              <strong>{option.name}</strong>
              <QuizMinMaxCaption>
                <span>
                  {option.min?.toLocaleString()}
                  {option.unit}
                </span>
                <span>
                  {option.max?.toLocaleString()}
                  {option.unit}
                </span>
              </QuizMinMaxCaption>
              <input
                type="range"
                className="range range-xs w-full [--range-shdw:215_0%_0%]"
                min={option.min}
                max={option.max}
                value={guessingValue[i]}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setGuessingValue((prev) => {
                    const next = [...prev];
                    next[i] = value;
                    return next;
                  });
                }}
              />
            </QuizSliderItem>
          ))}
        </QuizContainer>
        <div style={{ height: 16 }} />
        <GuessButton onClick={doGuess}>
          <strong>Guess!</strong>
        </GuessButton>
      </S.Container>
    </>
  );
}
