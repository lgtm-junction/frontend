"use client";

import styled from "styled-components";

const AlertDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 999999999999;
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
  height: 160px;
  background-color: white;
  gap: 24px;
`;

const Text = styled.div`
  color: var(--black, #0b0d0e);
  text-overflow: ellipsis;
  font-family: "Pretendard";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.2px;
`;

const CloseButton = styled.button`
  font-family: "Pretendard";
  font-size: 14px;
  height: 36px;
  width: 72px;
  background-color: #0b0d0e;
  color: white;
`;

const Alert = (props: {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}) => {
  const { isOpen, setIsOpen } = props;

  return (
    <>
      {isOpen && (
        <AlertDiv>
          <AlertContainer>
            <Text>WIP</Text>
            <CloseButton onClick={() => setIsOpen(false)}>Close</CloseButton>
          </AlertContainer>
        </AlertDiv>
      )}
    </>
  );
};

export default Alert;
