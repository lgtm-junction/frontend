"use client";

import * as S from "@/app/styles";
import { Score, ScoreRow } from "@/components/Score";
import { Button } from "@/components/global/Button";
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

export default function Page() {
  return (
    <>
      <S.Container>
        <CoverImage url="/almonds.png" />
        <div style={{ height: 24 }} />
        <strong>Almond Extra</strong>
        <p
          style={{
            color: "#778288",
          }}
        >
          Guess 1/5
        </p>
        <div style={{ height: 16 }} />
        <ScoreRow>
          {new Array(5).fill(undefined).map((_, i) => (
            <Score key={i} score={Math.floor(Math.random() * 101)} />
          ))}
        </ScoreRow>
        <QuizContainer>
          {new Array(5).fill(undefined).map((_, i) => (
            <QuizSliderItem key={i}>
              <strong>Syrup (pumps)</strong>
              <QuizMinMaxCaption>
                <span>0ml</span>
                <span>3,000ml</span>
              </QuizMinMaxCaption>
              <input
                type="range"
                className="range range-xs w-full [--range-shdw:215_0%_0%]"
              />
            </QuizSliderItem>
          ))}
        </QuizContainer>
        <div style={{ height: 16 }} />
        <GuessButton>
          <strong>Guess!</strong>
        </GuessButton>
      </S.Container>
    </>
  );
}
