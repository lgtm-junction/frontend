
export interface Food {
  id: string;
  // Cafe Latte
  name: string;
  // ₩ 50,000
  basePrice: number;

  customizations: FoodCustomization[];
}

export interface FoodCustomization {
  id: string;
  // ALMOND EXTRA
  name: string;
  additionalPrice: number;
  // SWEET, NUTS
  tags: string[];
  // SeolHyun’s
  // VANILLA & ALMOND
  // LATTE
  marketingSlug: string;

  // Almond syrup × 9
  // Almond slice × 5
  //  + 3 more
  customizations: string[];

  // shiftpsh
  author: string;
}

