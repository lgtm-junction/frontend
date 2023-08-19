
interface Stroke {
  points: {
    x: number;
    y: number;
  }[];
  // hex code
  color: string;
  width: number;
}


export interface CustomCakeDesign {
  id: string;
  strokes: Stroke[];
}

export const CustomCakeDesignCollectionName = "custom_cake_designs";