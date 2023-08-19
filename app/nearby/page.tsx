import * as S from "@/app/styles";
import Map from "@/components/Map";
export default function Nearby() {
  const bexcoLatLng = { latitude: 35.1689766, longitude: 129.1360411 };

  return (
    <S.Container>
      <Map
        style={{ width: `100%`, height: 400 }}
        center={bexcoLatLng}
        zoom={13}
      />
    </S.Container>
  );
}
