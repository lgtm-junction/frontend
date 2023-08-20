"use client";

import { MdNavigateNext } from "react-icons/md";
import styled from "styled-components";
import { Octagon } from "./octagon";

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

const Actions = styled.div`
  display: flex;
  gap: 0 8px;
`;

interface PresetItemProps {
  title: string;
  $backgroundImage: string | null;
  hideNavigateNext?: boolean;
  ComponentRight?: React.ReactNode;
}

const PresetItem = (props: PresetItemProps) => {
  const { title, $backgroundImage, ComponentRight, hideNavigateNext } = props;

  return (
    <RecentPresetItem key={title}>
      <RecentPresetTitleContainer>
        <Octagon width="36px" $backgroundImage={$backgroundImage}></Octagon>
        <RecentPresetTitle>{title}</RecentPresetTitle>
      </RecentPresetTitleContainer>
      <Actions>
        {ComponentRight}
        {!hideNavigateNext ? <MdNavigateNext size="24px" /> : null}
      </Actions>
    </RecentPresetItem>
  );
};

export default PresetItem;
