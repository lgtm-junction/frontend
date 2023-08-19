"use client";

import styled from "styled-components";

export const BodyBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
  left: 0;
  top: 0;
  background-image: url("/background.png");
  background-size: cover;
  background-position: center;
  @media (max-aspect-ratio: 5/4) {
    background: none;
  }
`;
