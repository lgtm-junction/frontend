"use client";

import * as S from "@/app/styles";
import PresetItem from "@/components/PresetItem";
import styled from "styled-components";

const RecentText = styled.div`
  color: var(--black, #0b0d0e);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const PresetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Page() {
  return (
    <S.Container>
      <div className="flex flex-col gap-8">
        <PresetItemContainer>
          <RecentText>My presets</RecentText>
          {["Almond Extra", "Vanilla Extra", "Shiftpsh Latte"].map((title) => (
            <PresetItem
              title={title}
              backgroundImage="/coffee.jpg"
              key={title}
            />
          ))}
        </PresetItemContainer>
        <PresetItemContainer>
          <RecentText>Shared presets</RecentText>
          {["Almond Extra", "Vanilla Extra", "Shiftpsh Latte"].map((title) => (
            <PresetItem
              title={title}
              backgroundImage="/coffee.jpg"
              key={title}
            />
          ))}
        </PresetItemContainer>
      </div>
    </S.Container>
  );
}
