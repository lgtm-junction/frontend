import { FoodCustomization } from "./foodCustomization";

export interface Food {
  id: string;
  // Cafe Latte
  name: string;
  // ₩ 50,000
  price: number;

  description: string;

  imageUrl: string;

  allgergyInfo: string[];

  customizations: FoodCustomization[];

  options?: string[];
}

export const FoodCollectionName = "foods";
