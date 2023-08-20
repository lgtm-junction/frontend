"use client";

import * as S from "@/app/styles";
import { QuizCoverImage } from "@/components/Quiz/CoverImage";
import { Score, ScoreRow } from "@/components/Score";
import { Octagon } from "@/components/octagon";
import { QuizScoresName, getDocuments } from "@/firebase/getData";
import { QuizScore } from "@/types/type";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const ScoreEntryItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid #e2e7e9;
  flex-direction: column;
`;

const ScoreRankRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserSmall = styled.div`
  display: flex;
  gap: 0 8px;
  align-items: center;
`;

const englishNumeral = (num: number) => {
  if (num % 100 !== 11 && num % 10 === 1) return `${num}st`;
  if (num % 100 !== 12 && num % 10 === 2) return `${num}nd`;
  if (num % 100 !== 13 && num % 10 === 3) return `${num}rd`;
  return `${num}th`;
};

export default function Page({ params }: { params: { id: string } }) {
  const [scoreEntries, setScoreEntries] = useState<
    (QuizScore & { rank: number })[] | null
  >(null);

  const fetchData = useCallback(async () => {
    try {
      const res = await getDocuments<QuizScore>(QuizScoresName);
      const filteredRes = res
        .filter((x) => x.customizationId === params.id)
        .sort((a, b) => {
          if (a.maxScore !== b.maxScore) return b.maxScore - a.maxScore;
          if (a.maxScoreAtIndex !== b.maxScoreAtIndex)
            return a.maxScoreAtIndex - b.maxScoreAtIndex;
          return a.createdAt - b.createdAt;
        })
        .map((x, i) => ({
          ...x,
          rank: i + 1,
        }));
      setScoreEntries(filteredRes);
    } catch (e) {
      console.log(e);
    }
  }, [params.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (scoreEntries === null) {
    return (
      <>
        <S.Container>
          <div style={{ height: 24 }} />
          <strong>Loading...</strong>
        </S.Container>
      </>
    );
  }

  return (
    <>
      <S.Container>
        <QuizCoverImage url="/almonds.png" />
        <div style={{ height: 24 }} />
        {scoreEntries.map((x) => (
          <ScoreEntryItem key={x.rank}>
            <ScoreRankRow>
              <span>
                <strong>{englishNumeral(x.rank)}</strong> / {x.maxScore}pts
              </span>
              <UserSmall>
                <small
                  style={{
                    color: "#778288",
                  }}
                >
                  @{x.author.id}
                </small>
                <Octagon $backgroundImage={x.author.image} width="24px" />
              </UserSmall>
            </ScoreRankRow>
            <ScoreRow>
              {new Array(5).fill(undefined).map((_, i) => (
                <Score key={i} score={x.score[i] || null} />
              ))}
            </ScoreRow>
          </ScoreEntryItem>
        ))}
      </S.Container>
    </>
  );
}
