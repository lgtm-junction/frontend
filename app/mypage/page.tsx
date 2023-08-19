"use client";

import * as S from "@/app/styles";
import { Octagon } from "@/components/octagon";

export default function Page() {
  return (
    <S.Container>
      <Octagon width="132px" />
      <div>
        <h1> 마이페이지</h1>
        <div>
          <p>기본정보</p>
          <p>주문내역 (준비중이에요!) </p>
          <p>커스텀 프리셋 목록 to) 커스텀 프리셋 관리 페이지</p>
          <S.Link href="/store/1/custom">커스텀 프리셋 관리 페이지</S.Link>
        </div>
      </div>
    </S.Container>
  );
}
