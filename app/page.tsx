import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <h1>메인 페이지</h1>
      <div>
        지도- 근처 가게들 볼 수 있음 (팝업) <br />
        아래 추천 가게 리스트들 대표 사진, 가게명, 메뉴, 사용하는 모델 누르면
        가게 메인 페이지로 감
      </div>
      <div>사이트맵</div>
      <pre>
        {`메인페이지
          ㄴ가게 메인 페이지
              ㄴ메뉴 커스텀 페이지
              ㄴ주문 페이지
              ㄴ주문 완료 페이지
          ㄴ마이 페이지
              ㄴ커스텀 프리셋 관리 페이지`}
      </pre>
      <S.Link href="/store/1">가게 메인 페이지</S.Link>
      <S.Link href="/mypage">마이 페이지</S.Link>
    </S.Container>
  );
}
