"use client";

import * as S from "@/app/styles";
import EmptyStatePlaceholder from "@/components/EmptyStatePlaceholder";
import PresetItem from "@/components/PresetItem";
import { Tab, TabsContainer } from "@/components/Tab";
import { CustomCollectionName, getDocuments } from "@/firebase/getData";
import { CustomType } from "@/types/type";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { MdNavigateNext, MdTrendingUp } from "react-icons/md";
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
  const [quizzes, setQuizzes] = useState<CustomType[]>();

  const fetchData = useCallback(async () => {
    try {
      const res = await getDocuments<CustomType>(CustomCollectionName);
      setQuizzes(res);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <S.Container>
      <div className="flex flex-col gap-8">
        <TabsContainer style={{ marginTop: -16 }}>
          <Tab href="/">Main</Tab>
          <Tab href="/quiz" active>
            Quiz
          </Tab>
        </TabsContainer>
        <PresetItemContainer>
          <RecentText>My presets</RecentText>
          <EmptyStatePlaceholder>Empty</EmptyStatePlaceholder>
        </PresetItemContainer>
        <PresetItemContainer>
          <RecentText>Shared presets</RecentText>
          {quizzes?.map(({ name, id, author }) => (
            <PresetItem
              key={id}
              title={name}
              $backgroundImage={author.image}
              ComponentRight={
                <>
                  <Link href={`/quiz/${id}/ranking`}>
                    <MdTrendingUp size={32} />
                  </Link>
                  <Link href={`/quiz/${id}`}>
                    <MdNavigateNext size={32} />
                  </Link>
                </>
              } 
              hideNavigateNext
            />
          )) || null}
        </PresetItemContainer>
      </div>
    </S.Container>
  );
}
