"use client";
import React from "react"
import { Map as NaverMap, useNaverMapInit, Marker } from '@r2don/react-naver-map';

const MARKERS = [
  {latitude: 37., longitude: 127},
  {latitude: 37.5, longitude: 127.5},
  {latitude: 38, longitude: 128},
  {latitude: 38.5, longitude: 128.5},
]

const NaverMapInitParams = {
  ncpClientId: 'uvz238ta85',
}

interface GeoPosition {
  latitude: number;
  longitude: number;
}

export interface MapProps extends React.PropsWithChildren {
  center: GeoPosition;
  zoom: number;
  markers?: GeoPosition[];
  style: React.CSSProperties;
}

export const Map: React.FC<MapProps> = (props) => {
  const {isLoaded} = useNaverMapInit(NaverMapInitParams);

  if(!isLoaded) return null;

  return (
    <NaverMap {...props}>
      {props.markers?.map((marker) => <Marker key={JSON.stringify(marker)} position={marker} />)}
    </NaverMap>
  );
}

export default Map;