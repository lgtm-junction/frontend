import * as S from "@/app/styles";
export default function Page() {
  return (
    <S.Container>
      <div>
        <h1>주문 페이지</h1>
        <div>
          주문한 목록 다시 한 번 보여줌 가격 표시 현장결제만 가능 to) 주문 완료
          페이지
        </div>
        <S.Link href="/store/1/done">주문 완료 페이지</S.Link>
      </div>
    </S.Container>
  );
}
