import styled from "styled-components";

const SCORE_100 = [107, 222, 97] as const;
const SCORE_50 = [239, 175, 80] as const;
const SCORE_0 = [239, 80, 80] as const;
const SCORE_UNKNOWN = [213, 218, 221] as const;

const scoreToColorTuple = (x: number | null) => {
  if (x === null) return SCORE_UNKNOWN;
  if (x >= 100) return SCORE_100;
  if (x >= 50) {
    const ratio = (x - 50) / 50;
    return new Array(3)
      .fill(0)
      .map((_, i) =>
        Math.round(SCORE_50[i] * (1 - ratio) + SCORE_100[i] * ratio)
      );
  }
  if (x >= 0) {
    const ratio = x / 50;
    return new Array(3)
      .fill(0)
      .map((_, i) =>
        Math.round(SCORE_0[i] * (1 - ratio) + SCORE_50[i] * ratio)
      );
  }
  return SCORE_UNKNOWN;
};

const scoreToColor = (x: number | null) => {
  const tuple = scoreToColorTuple(x);
  return `rgb(${tuple[0]}, ${tuple[1]}, ${tuple[2]})`;
};

const ScoreContainer = styled.div`
  width: 48px;
  height: 48px;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  word-break: keep-all;
`;

interface Props {
  score: number | null;
}

export const Score = ({ score }: Props) => {
  const color = scoreToColor(score);
  const caption = score === null ? "?" : score;
  return (
    <ScoreContainer style={{ backgroundColor: color }}>
      {caption}
    </ScoreContainer>
  );
};

export const ScoreRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
