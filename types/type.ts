export interface MenuType {
  id: number;
  name: string;
  price: number;
  options: string[];
  image: string;
  description: string;
  allergy: string[];
}

export interface CustomType {
  id: number;
  name: string;
  author: {
    id: string;
    image: string;
  };
  tags: string[];
  price: number;
  options: OptionType[];
}

export interface OptionType {
  id: number;
  name: string;
  isBoolean: boolean;
  min: number;
  max: number;
  unit: string;
  value: number;
}
