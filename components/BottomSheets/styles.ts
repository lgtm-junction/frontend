import Sheet from "react-modal-sheet";
import { styled } from "styled-components";

export const StyledSheet = styled(Sheet)`
  position: absolute !important;
`;

export const Backdrop = styled(Sheet.Backdrop)`
  background: none !important;
`;

export const SheetContainer = styled(Sheet.Container)`
  box-shadow: none !important;
  border-radius: 32px 32px 0 0 !important;
  background-color: white;
`;

export const SheetBackdrop = styled(Sheet.Backdrop)<{ $isIgnored: boolean }>`
  background: none !important;
  ${(props) => props.$isIgnored && `pointer-events: none !important;`}
  cursor: default;
`;
