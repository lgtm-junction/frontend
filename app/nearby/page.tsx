import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import Map from "@/components/Map";
import { RestaurantCollectionName, getDocuments } from "@/firebase/getData";
import { RestaurantType } from "@/types/type";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";

export default async function Nearby() {
  const bexcoLatLng = { latitude: 35.1689766, longitude: 129.1360411 };

  let resturants: RestaurantType[] = [];
  try {
    resturants = await getDocuments<RestaurantType>(RestaurantCollectionName);
  } catch (e) {
    console.log(e);
  }

  return (
    <S.Container>
      <div className="relative">
        <button className="absolute left-1/2 -translate-x-1/2 top-5 z-40 bg-black text-white text-sm font-bold flex gap-2 justify-center items-center w-fit px-2">
          <MdLocationOn />
          Search this area
        </button>
        <Map
          style={{ width: `100%`, height: 400 }}
          center={bexcoLatLng}
          zoom={13}
        />
      </div>
      <BottomSheets initialTop={350}>
        <div className="w-full flex flex-col px-4">
          {resturants.map(({ name, geoInformation, id }, idx) => (
            <Link
              href={`/store/${id}`}
              className="flex gap-3 items-center border-b border-b-gray-100 last-of-type:border-b-transparent py-4"
              key={`store-${idx}`}
            >
              <div className="w-20 h-20 border border-black shrink-0">
                <img src="/cake.jpg" className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between gap-1">
                  <div className="text-strong">{name}</div>
                  <div className="text-gray-400 text-base whitespace-nowrap">
                    {geoInformation.pseudoDistance} km
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="text-sm text-gray-500 pt-1">
                    {geoInformation.address}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </BottomSheets>
    </S.Container>
  );
}
