export interface MenuType {
  id: string;
  // Cafe Latte
  name: string;
  // ₩ 50,000
  price: number;
  description: string;
  imageUrl: string;
  allergyInfo: string[];
  customizations: CustomType[];
  options?: string[];
}

export interface Author {
  id: string;
  image: string | null;
}

export interface CustomType {
  id: string;
  name: string;
  author: Author;
  tags: string[];
  price: number;
  options: CustomOptionType[];
  menuId: string;
}

export interface CustomOptionType {
  id: string;
  name: string;
  // 이게 켜져있으면 min 0 max 1인 온오프로 취급
  isBoolean?: boolean;
  min?: number;
  max?: number;
  unit: string;
  value: number;
}

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
    latitude: number;
    longitude: number;
  };
  // pseudo distance from my location in kilometers
  pseudoDistance: number;
}

export interface RestaurantType {
  id: string;
  name: string;
  geoInformation: GeoInformation;
  searchKeywords: string[];
  robot: Robot;
  // separate query for food
  menuIds: string[];
  imageUrl: string;
}

export const RestaurantCollectionName = "stores";

export interface Quiz {
  id: string;
  customId: string;
  guesses: QuizGuess[];
}

export interface QuizGuess {
  score: number;
  guessedValues?: number[];
}

export interface QuizScore {
  author: Author;
  customizationId: string;
  maxScore: number;
  // The first index where the max score is achieved
  maxScoreAtIndex: number;
  score: number[];
  // The record creation time in UNIX milliseconds
  createdAt: number;
}
