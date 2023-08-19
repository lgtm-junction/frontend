import * as S from "@/app/styles";
export default function Page() {
  return (
    <S.Container>
      <div>
        <h1>가게 메인 페이지</h1>
        <div>
          메인 로봇 사진or이미지 사용하는 로봇 모델/관리 등등 메뉴리스트
          가게정보
        </div>
        <S.Link href="/store/1/custom">메뉴 커스텀 페이지</S.Link>
        <S.Link href="/store/1/order">주문 페이지</S.Link>
      </div>
    </S.Container>
  );
}
