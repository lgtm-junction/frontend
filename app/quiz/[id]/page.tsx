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
    `http://localhost:3000/quiz/${quiz.id}`,
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

  useEffect(() => {
    const content = guessesToEmojiContent(custom, guesses);
    const copyContent = () => {
      navigator.clipboard.writeText(content);
      openAlert("Copied!");
    };
    if ((guesses[guesses.length - 1]?.score ?? 0) >= 100) {
      openAlert(
        <>
          <Button onClick={copyContent}>Copy</Button>
          <Button onClick={closeAlert}>Close</Button>
        </>
      );
    } else if (guesses.length > MAX_GUESS_COUNT - 1) {
      openAlert(
        <>
          <Button onClick={copyContent}>Copy</Button>
          <Button onClick={closeAlert}>Close</Button>
        </>
      );
      setGuesses([]);
    }
  }, [closeAlert, guesses, openAlert]);

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
    setGuesses((prev) => [...prev, { score, guessedValues: guessingValue }]);
  }, [custom.options, guessingValue]);

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
