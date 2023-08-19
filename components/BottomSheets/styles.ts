import { styled } from "styled-components";
import Sheet from "react-modal-sheet";

export const StyledSheet = styled(Sheet)`
  position: absolute !important;
`;

export const Backdrop = styled(Sheet.Backdrop)`
  background: none !important;
`;

export const SheetContainer = styled(Sheet.Container)`
  box-shadow: 0 0 16px 6px rgba(0, 0, 0, 0.06), 0 0 8px 6px rgba(0, 0, 0, 0.12) !important;
  border-radius: 32px 32px 0 0 !important;
  background-color: white;
`;

export const SheetBackdrop = styled(Sheet.Backdrop)<{ isIgnored: boolean }>`
  background: none !important;
  ${(props) => props.isIgnored && `pointer-events: none !important;`}
  cursor: default;
`;
