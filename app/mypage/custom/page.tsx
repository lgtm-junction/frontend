"use client";

import * as S from "@/app/styles";
import PresetItem from "@/components/PresetItem";
import Promotion from "@/components/global/Promotion";
import { Octagon } from "@/components/octagon";
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

export default function Page() {
  return (
    <S.Container>
      <div className="flex flex-col gap-8">
        <Promotion />
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
          <RecentText>My presets</RecentText>
          {["Almond Extra", "Vanilla Extra", "Shiftpsh Latte"].map((title) => (
            <PresetItem
              title={title}
              backgroundImage="/coffee.jpg"
              key={title}
            />
          ))}
        </RecentPresetItemContainer>
        <RecentPresetItemContainer>
          <RecentText>Shared presets</RecentText>
          {["Almond Extra", "Vanilla Extra", "Shiftpsh Latte"].map((title) => (
            <PresetItem
              title={title}
              backgroundImage="/coffee.jpg"
              key={title}
            />
          ))}
        </RecentPresetItemContainer>
      </div>
    </S.Container>
  );
}
