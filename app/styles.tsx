"use client";

import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  gap: 4px;
`;

export const Link = styled.a`
  display: block;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;
