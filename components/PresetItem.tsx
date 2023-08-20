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

interface PresetItemProps {
  title: string;
  $backgroundImage: string | null;
}

const PresetItem = (props: PresetItemProps) => {
  const { title, $backgroundImage } = props;

  return (
    <RecentPresetItem key={title}>
      <RecentPresetTitleContainer>
        <Octagon width="36px" $backgroundImage={$backgroundImage}></Octagon>
        <RecentPresetTitle>{title}</RecentPresetTitle>
      </RecentPresetTitleContainer>
      <MdNavigateNext size="24px" />
    </RecentPresetItem>
  );
};

export default PresetItem;
