"use client";

import Sheet, { SheetRef } from "react-modal-sheet";
import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useContainerRef } from "@/context/useContainerRef";

export default function BottomSheets({
  children,
  initialTop,
}: {
  children: ReactNode;
  initialTop: number;
}) {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const [top, setTop] = useState(0);
  const [bottom, setBottom] = useState(0);

  const { ref: containerRef } = useContainerRef();

  useEffect(() => {
    const handleBottomSheet = () => {
      setTop(window.innerHeight - 60);
      setBottom(window.innerHeight - initialTop);
    };
    handleBottomSheet();
    window.addEventListener("resize", handleBottomSheet);
    return () => window.removeEventListener("resize", handleBottomSheet);
  }, []);

  return containerRef && containerRef.current ? (
    <S.StyledSheet
      mountPoint={containerRef.current}
      isOpen={true}
      onClose={() => {
        snapTo(1);
      }}
      snapPoints={[top, bottom]}
      initialSnap={1}
      ref={ref}
    >
      <S.SheetContainer>
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>{children}</Sheet.Scroller>
        </Sheet.Content>
      </S.SheetContainer>
    </S.StyledSheet>
  ) : (
    <></>
  );
}
