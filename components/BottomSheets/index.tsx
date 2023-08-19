"use client";

import Sheet, { SheetRef } from "react-modal-sheet";
import { ReactNode, useEffect, useRef, useState } from "react";
import * as S from "./styles";

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

  useEffect(() => {
    setTop(window.innerHeight - 60);
  }, []);

  return (
    <Sheet
      isOpen={true}
      onClose={() => {
        snapTo(1);
      }}
      snapPoints={[top, height]}
      initialSnap={1}
      ref={ref}
    >
      <Sheet.Container>
        <Sheet.Header />
        <Sheet.Content>
          <Sheet.Scroller>{children}ddd</Sheet.Scroller>
        </Sheet.Content>
      </Sheet.Container>
      <S.Backdrop onTap={() => snapTo(1)} />
    </Sheet>
  );
}
