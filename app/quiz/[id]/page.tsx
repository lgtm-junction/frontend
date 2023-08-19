"use client";

import * as S from "@/app/styles";
import styled from "styled-components";

const CoverImage = styled.div<{ url: string }>`
  width: calc(100% + 32px);
  height: 128px;
  background-image: url(${(props) => props.url});
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

export default function Page() {
  return (
    <>
      <S.Container>
        <CoverImage url="/almonds.png" />
        <div style={{ height: "24px" }} />
        <strong>Almond Extra</strong>
      </S.Container>
    </>
  );
}
