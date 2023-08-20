"use client";

import styled from "styled-components";

export const Octagon = styled.div<{
  width: string;
  $backgroundImage?: string | null;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-color: #e2e7e9;
  background-image: url("${(props) => props.$backgroundImage}");
  background-size: cover;

  clip-path: polygon(
    28% 0,
    72% 0,
    100% 28%,
    100% 72%,
    72% 100%,
    28% 100%,
    0 72%,
    0 28%
  );
`;

export const OctagonFader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
