"use client";

import Sheet, { SheetRef } from "react-modal-sheet";
import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useContainerRef } from "@/context/useContainerRef";

export default function BottomSheets({
  children,
  height,
}: {
  children: ReactNode;
  height: number;
}) {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const [top, setTop] = useState(0);

  const { ref: containerRef } = useContainerRef();

  useEffect(() => {
    setTop(window.innerHeight - 60);
  }, []);

  return containerRef && containerRef.current ? (
    <S.StyledSheet
      mountPoint={containerRef.current}
      isOpen={true}
      onClose={() => {
        snapTo(1);
      }}
      snapPoints={[top, height]}
      initialSnap={1}
      ref={ref}
    >
      <S.SheetContainer>
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>{children}ddd</Sheet.Scroller>
        </Sheet.Content>
      </S.SheetContainer>
    </S.StyledSheet>
  ) : (
    <></>
  );
}
