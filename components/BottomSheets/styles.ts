import { styled } from "styled-components";
import { motion } from "framer-motion";
import Sheet from "react-modal-sheet";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  right: 0;

  height: 100%;

  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  background: white;

  transition: transform 0.5s ease-out; /*바텀시트 애니메이션 속도*/
`;

export const BottomSheetContent = styled.div`
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const HandleContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  display: flex;
  justify-items: center;
`;

export const Handle = styled.div`
  width: 40px;
  height: 4px;
  border-radius: 2px;
  background-color: #dee2e6;
  margin: auto;
`;

export const Backdrop = styled(Sheet.Backdrop)`
  background: none !important;
`;
