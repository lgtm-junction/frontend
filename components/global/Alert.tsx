"use client";

import { PropsWithChildren } from "react";
import styled from "styled-components";

const AlertDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 999999999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  background-color: white;
  gap: 24px;
  padding: 1rem 0;
  border-radius: 8px;
`;

interface Props {
  isOpen: boolean;
}

const Alert = (props: PropsWithChildren<Props>) => {
  const { isOpen, children } = props;

  return (
    <>
      {isOpen && (
        <AlertDiv>
          <AlertContainer>{children}</AlertContainer>
        </AlertDiv>
      )}
    </>
  );
};

export default Alert;
