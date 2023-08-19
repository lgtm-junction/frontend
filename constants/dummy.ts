import { CustomType } from "@/types/type";

export const CUSTOM: CustomType[] = [
  {
    id: 1,
    name: "ALMOND EXTRA",
    price: 5000,
    tags: ["SWEET", "NUTS"],
    options: [
      {
        id: 1,
        name: "Almond Syrup",
        isBoolean: false,
        min: 0,
        max: 30,
        unit: "ml",
        value: 25,
      },
      {
        id: 2,
        name: "Almond Slice",
        isBoolean: false,
        min: 0,
        max: 50,
        unit: "g",
        value: 25,
      },
      {
        id: 3,
        name: "Classic Syrup",
        isBoolean: false,
        min: 0,
        max: 30,
        unit: "ml",
        value: 0,
      },
      {
        id: 4,
        name: "Oat milk instead of milk",
        isBoolean: true,
        min: 0,
        max: 1,
        unit: "",
        value: 0,
      },
    ],
    author: {
      id: "shiftpsh",
      image:
        "https://pbs.twimg.com/profile_images/1559136628609732608/hoYcE2w6_400x400.jpg",
    },
  },
];
