"use client";

import { ReactNode } from "react";
import * as S from "./styles";

export default function BottomSheets({ children }: { children: ReactNode }) {
  return (
    <S.Wrapper>
      <S.HandleContainer>
        <S.Handle />
      </S.HandleContainer>
      <S.BottomSheetContent>{children}</S.BottomSheetContent>
    </S.Wrapper>
  );
}
