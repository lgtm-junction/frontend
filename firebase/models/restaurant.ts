import { CustomCakeDesign } from "./customCakeDesign";

export interface Robot {
  // JAKA Zu 18
  modelName: string;
  // 마지막 목욕: 어제
  lastBathDateTime: Date;
  // 마쉿는 케이크를 만들어 드릴게욤,,
  comment: string;
}

export interface FoodOption {
  // 'Cream': 'Large amount (1,000g)'
  // 'Sheet': 'Vanilla'
  name: string;
  type: "custom_cake_design" | "choice" | "comment";
  // ['Large amount (1,000g)', ...]
  choices?: string[];
  // 'Vanilla'
  comment?: string;
  customCakeDesign?: CustomCakeDesign;
}

export interface FoodProduct {
  // Cafe Latte
  name: string;
  // ₩ 50,000
  price: number;
  options: FoodOption[];
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
  type: "sushi" | "cake" | "coffee";
  geoInformation: GeoInformation;
  searchKeywords: string[];
  robot: Robot;
  products: FoodProduct[];
}

export const RestaurantCollectionName = "stores";