"use client";

import * as S from "@/app/styles";
import { Octagon } from "@/components/octagon";
import { MdNavigateNext } from "react-icons/md";
import styled from "styled-components";

const RecentText = styled.div`
  color: var(--black, #0b0d0e);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const RecentPresetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RecentPresetItem = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
  padding: 16px 0;
  padding-right: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e7e9;
`;

const RecentPresetTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const RecentPresetTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.2px;
`;

export default function Page() {
  return (
    <S.Container>
      <div className="flex flex-col gap-8">
        <div className="flex justify-around" style={{ padding: "16px 0" }}>
          {["sushi", "cake", "coffee"].map((item, idx) => (
            <Octagon
              key={`octagon-${idx}`}
              width="96px"
              backgroundImage={`/${item}.jpg`}
              className="flex justify-center items-center text-white text-2xl font-bold capitalize"
            >
              {item}
            </Octagon>
          ))}
        </div>
        <RecentPresetItemContainer>
          <RecentText>Recent preset orders</RecentText>
          {["Almond Extra", "Vanilla Extra", "Shiftpsh Latte"].map((title) => (
            <RecentPresetItem key={title}>
              <RecentPresetTitleContainer>
                <Octagon width="36px" backgroundImage="/coffee.jpg"></Octagon>
                <RecentPresetTitle>{title}</RecentPresetTitle>
              </RecentPresetTitleContainer>
              <MdNavigateNext size="24px" />
            </RecentPresetItem>
          ))}
        </RecentPresetItemContainer>
        <RecentPresetItemContainer>
          <RecentText>Frequent preset orders</RecentText>
          {["Almond Extra", "Vanilla Extra", "Shiftpsh Latte"].map((title) => (
            <RecentPresetItem key={title}>
              <RecentPresetTitleContainer>
                <Octagon width="36px" backgroundImage="/coffee.jpg"></Octagon>
                <RecentPresetTitle>{title}</RecentPresetTitle>
              </RecentPresetTitleContainer>
              <MdNavigateNext size="24px" />
            </RecentPresetItem>
          ))}
        </RecentPresetItemContainer>
      </div>
    </S.Container>
  );
}
