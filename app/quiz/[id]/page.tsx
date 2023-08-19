"use client";

import * as S from "@/app/styles";
import { Score, ScoreRow } from "@/components/Score";
import { Button } from "@/components/global/Button";
import { useAlert } from "@/context/useAlert";
import { exampleCustoms } from "@/firebase/models/example-models";
import { CustomType, QuizGuess } from "@/types/type";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const CoverImage = styled.div<{ url: string }>`
  width: calc(100% + 32px);
  height: 128px;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center;
  margin-top: -16px;
  margin-left: -16px;
  margin-right: -16px;
`;

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
  if (score >= 100) return "🟩";
  if (score >= 75) return "🟨";
  if (score >= 50) return "🟧";
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

export default function Page({ params }: { params: { id: string } }) {
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
  const custom = exampleCustoms;

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomDummyGuesses(randomGuesses());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const doGuess = useCallback(() => {
    // 점수 = min(100, 110 - (오차의 합(%)) / 파라미터 수) )
    const distances = custom.options.map((option, i) => {
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
        110 - distances.reduce((a, b) => a + b, 0) / custom.options.length
      )
    );

    const newGuesses = [...guesses, { score, guessedValues: guessingValue }];
    setGuesses(newGuesses);

    const success = newGuesses.some((guess) => guess.score === 100);
    const complete = newGuesses.length === MAX_GUESS_COUNT;

    if (success || complete) {
      const content = guessesToEmojiContent(custom, newGuesses);
      const copyContent = () => {
        navigator.clipboard.writeText(content);
        openAlert(
          <AlertContainer>
            <div style={{ height: 16 }} />
            <h2 className="text-h2 text-center">Complete!</h2>
            <p className="text-p text-center">Copied to clipboard.</p>
            <div style={{ height: 16 }} />
            <ButtonsRow>
              <Button
                as="a"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  content
                )}`}
                style={{ flex: 1 }}
              >
                Twitter
              </Button>
              <Button
                onClick={() => {
                  closeAlert();
                  setGuesses([]);
                }}
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
          <h2 className="text-h2 text-center">Complete!</h2>
          <ScoreRow style={{ width: "100%" }}>
            {new Array(5).fill(undefined).map((_, i) => (
              <Score
                key={i}
                score={
                  (newGuesses[i] ?? randomDummyGuesses[i] ?? { score: 0 }).score
                }
              />
            ))}
          </ScoreRow>
          <div style={{ height: 16 }} />
          <ButtonsRow>
            <Button onClick={copyContent} style={{ flex: 1 }}>
              Share
            </Button>
            <Button
              onClick={() => {
                closeAlert();
                setGuesses([]);
              }}
              style={{ flex: 1 }}
            >
              Close
            </Button>
          </ButtonsRow>
        </AlertContainer>
      );
    }
  }, [
    closeAlert,
    custom,
    guesses,
    guessingValue,
    openAlert,
    randomDummyGuesses,
  ]);

  return (
    <>
      <S.Container>
        <CoverImage url="/almonds.png" />
        <div style={{ height: 24 }} />
        <strong>{custom.name}</strong>
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
          {custom.options.map((option, i) => (
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
