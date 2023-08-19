import Map from "@/components/Map";
import BottomSheets from "@/components/BottomSheets";
import * as S from "./styles";
import { Search } from "@/components/global/Search";
import { MdLocationOn } from "react-icons/md";
import { Divider } from "@/components/global/Divider";
import { Octagon } from "@/components/octagon";

const bexcoLatLng = { latitude: 35.1689766, longitude: 129.1360411 };

export default function Home() {
  return (
    <S.Container>
      <Search />
      <div className="flex justify-around mt-7">
        {["sushi", "cake", "coffee"].map((item, idx) => (
          <Octagon
            key={`octagon-${idx}`}
            width="96px"
            backgroundImage={`${item}.jpg`}
            className="flex justify-center items-center text-white text-2xl font-bold capitalize"
          >
            {item}
          </Octagon>
        ))}
      </div>
      <Divider />
      <div className="bg-black px-4 py-3 text-xl text-white font-semibold flex justify-between">
        Search Nearby
        <MdLocationOn />
      </div>
      <Divider />
      <h1>메인 페이지</h1>
      <div>
        지도- 근처 가게들 볼 수 있음 (팝업) <br />
        <Map
          style={{ width: `100%`, height: 400 }}
          center={bexcoLatLng}
          zoom={13}
        />
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
