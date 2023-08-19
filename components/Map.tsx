"use client";
import React from "react";
import {
  Map as NaverMap,
  useNaverMapInit,
  Marker,
} from "@r2don/react-naver-map";

const MARKERS = [
  { latitude: 35.1689766, longitude: 129.1360411 },
  { latitude: 35.1788, longitude: 129.1249 },
  { latitude: 35.1615, longitude: 129.1479 },
];

const NaverMapInitParams = {
  ncpClientId: "uvz238ta85",
};

interface GeoPosition {
  latitude: number;
  longitude: number;
}

export interface MapProps {
  center: GeoPosition;
  zoom: number;
  markers?: GeoPosition[];
  style: React.CSSProperties;
}

export const Map: React.FC<MapProps> = (props) => {
  const { isLoaded } = useNaverMapInit(NaverMapInitParams);

  if (!isLoaded) return null;

  return (
    <NaverMap {...props}>
      <>
        {MARKERS.map((marker, idx) => (
          <Marker
            key={`marker-${idx}`}
            position={marker}
            icon={{
              url: "/marker.svg",
            }}
          />
        ))}
      </>
    </NaverMap>
  );
};

export default Map;
