"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import { useContainerRef } from "@/context/useContainerRef";
export default function Page() {
  const { ref } = useContainerRef();
  return (
    <>
      <S.Container>
        <div>
          <h1>가게 메인 페이지</h1>
          <div>{JSON.stringify(ref?.current)}</div>
          <div>
            메인 로봇 사진or이미지 사용하는 로봇 모델/관리 등등 메뉴리스트
            가게정보
          </div>
          <S.Link href="/store/1/custom">메뉴 커스텀 페이지</S.Link>
          <S.Link href="/store/1/order">주문 페이지</S.Link>
        </div>
      </S.Container>
      <BottomSheets height={400}>
        <div className="w-full"></div>
      </BottomSheets>
    </>
  );
}
