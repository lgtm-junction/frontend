"use client";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PromotionContainer = styled.div`
  width: 342px;
  height: 128px;
  border-radius: 8px;
  background: linear-gradient(270deg, #000 0%, rgba(0, 0, 0, 0) 100%),
    url("/seolhyun.png"), lightgray 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 12px;
`;

const PromotionText = styled.div`
  width: 100%;
  color: #fff;
  text-align: right;
  /* strong */
  font-family: Pretendard Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 24px */
  letter-spacing: -0.2px;
`;

const PromotionTextSmall = styled.div`
  width: 100%;
  color: var(--gray-500, #778288);
  text-align: right;
  font-family: Pretendard Variable;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  letter-spacing: 0.12px;
`;

const Promotion = () => {
  return (
    <Container>
      <PromotionContainer>
        <PromotionTextSmall>ⓘ Promotion</PromotionTextSmall>
        <PromotionText>
          SeolHyun’s
          <br />
          VANILLA & ALMOND
          <br />
          LATTE
        </PromotionText>
      </PromotionContainer>
    </Container>
  );
};

export default Promotion;
