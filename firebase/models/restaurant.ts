import { Food } from "./food";

export interface Robot {
  // JAKA Zu 18
  modelName: string;
  // 마지막 목욕: 어제
  lastBathDateTime: Date;
  // 마쉿는 케이크를 만들어 드릴게욤,,
  comment: string;
}

export interface GeoInformation {
  // 234-9, Centumnam-daero, Haeundae-gu, Busan
  address: string;
  marker: {
    latitude: string;
    longitude: string;
  }
  // pseudo distance from my location in kilometers
  pseudoDistance: number;
}

export interface Restaurant {
  id: string;
  name: string;
  geoInformation: GeoInformation;
  searchKeywords: string[];
  robot: Robot;
  products: Food[];
}

export const RestaurantCollectionName = "stores";