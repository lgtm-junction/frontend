import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { Search } from "@/components/global/Search";
import { Octagon } from "@/components/octagon";
import { MdLocationOn } from "react-icons/md";
import * as S from "./styles";

export default function Home() {
  return (
    <S.Container>
      <div className="flex flex-col gap-4">
        <Search />
        <Promotion />
        <div className="flex justify-around">
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
        <div>{/* Card */}</div>
      </div>
    </S.Container>
  );
}
