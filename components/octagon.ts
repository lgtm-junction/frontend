"use client";

import styled from "styled-components";

export const Octagon = styled.div<{ width: string; backgroundImage?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  background-color: #e2e7e9;
  background-image: url("${(props) => props.backgroundImage}");

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
