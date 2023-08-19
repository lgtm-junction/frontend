
export interface FoodCustomization {
  id: string;
  // ALMOND EXTRA
  name: string;
  // SWEET, NUTS
  tags: string[];
  // Almond syrup × 9
  // Almond slice × 5
  //  + 3 more
  options: CustomOption[];
  // shiftpsh
  author: string;
}

export default interface CustomOption {
  name: string;
  // 이게 켜져있으면 min 0 max 1인 온오프로 취급
  isBoolean: boolean;
  min?: number;
  max?: number;
  unit?: string;
  value?: number;
}
