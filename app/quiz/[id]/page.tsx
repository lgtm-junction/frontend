"use client";

import * as S from "@/app/styles";
import { Score, ScoreRow } from "@/components/Score";
import { Button } from "@/components/global/Button";
import { exampleCustoms } from "@/firebase/models/example-models";
import { QuizGuess } from "@/types/type";
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

export default function Page({ params }: { params: { id: string } }) {
  const MAX_GUESS_COUNT = 5;
  const randomGuesses = () =>
    new Array(5)
      .fill(undefined)
      .map(() => ({ score: Math.floor(Math.random() * 101) }));

  const [guesses, setGuesses] = useState<QuizGuess[]>([]);
  const [randomDummyGuesses, setRandomDummyGuesses] = useState<QuizGuess[]>(
    randomGuesses()
  );

  const [guessingValue, setGuessingValue] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRandomDummyGuesses(randomGuesses());
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if ((guesses[guesses.length - 1]?.score ?? 0) > 100) {
      alert("You are a genius!");
    } else if (guesses.length > MAX_GUESS_COUNT - 1) {
      alert("You are a fool!");
      setGuesses([]);
    }
  }, [guesses]);

  const doGuess = useCallback(() => {
    // 점수 = min(100, 110 - (오차의 합(%)) / 파라미터 수) )
    const distances = custom.options.map((option, i) => {
      const guessedValue =
        guessingValue[i] ?? ((option.max ?? 0) - (option.min ?? 0)) / 2;
      return (
        (Math.abs(guessedValue - option.value) /
          Math.max(guessedValue, option.value)) *
        100
      );
    });

    const score = Math.floor(
      Math.min(
        100,
        110 - distances.reduce((a, b) => a + b, 0) / custom.options.length
      )
    );
    setGuesses((prev) => [...prev, { score, guessedValues: guessingValue }]);
  }, [guessingValue]);

  const custom = exampleCustoms;

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
