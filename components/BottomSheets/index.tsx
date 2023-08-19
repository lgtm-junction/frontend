"use client";

import Sheet, { SheetRef } from "react-modal-sheet";
import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useContainerRef } from "@/context/useContainerRef";

export default function BottomSheets({
  children,
  initialTop,
  close = null,
}: {
  children: ReactNode;
  initialTop: number;
  close?: (() => void) | null;
}) {
  const ref = useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);
  const [top, setTop] = useState(2000);
  const [bottom, setBottom] = useState(2000);

  const { ref: containerRef } = useContainerRef();

  useEffect(() => {
    const handleBottomSheet = () => {
      setTop(window.innerHeight - 60);
      setBottom(window.innerHeight - initialTop);
    };
    handleBottomSheet();
    window.addEventListener("resize", handleBottomSheet);
    return () => window.removeEventListener("resize", handleBottomSheet);
  }, [initialTop]);

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
      <S.SheetBackdrop
        onTap={() => {
          if (close) close();
        }}
        isIgnored={close === null}
      />
    </S.StyledSheet>
  ) : (
    <></>
  );
}
