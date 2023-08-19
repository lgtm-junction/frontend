import * as S from "@/app/styles";
import Link from "next/link";
export default function Page() {
  return (
    <S.Container>
      <div>
        <h1>메뉴 커스텀 페이지</h1>
        <div>
          옵션들 케이크의 경우 레터링 하는 페이지 to) 가게 메인 페이지 (선택
          완료시)
          <S.Link href="/store/1">가게 메인 페이지</S.Link>
        </div>
      </div>
    </S.Container>
  );
}
