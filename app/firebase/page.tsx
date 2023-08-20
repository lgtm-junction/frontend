"use client";

import { CustomCollectionName, appendToDatabase } from "@/firebase/getData";
import { CustomType } from "@/types/type";
import { useEffect } from "react";

const Page = () => {
  const handleFetch = async () => {
    try {
      await appendToDatabase(CustomCollectionName, {
        id: "3",
        author: {
          id: "r4bb1t",
          image:
            "https://blog.themalamarket.com/wp-content/uploads/2022/12/malatang-newsletter-11.jpg",
        },
        menuId: "qioh3ug9pouw4ne",
        name: "Malatang (Vegan)",
        price: 16000,
        tags: ["SPICY", "VEGAN"],
        options: [
          {
            id: "1",
            isBoolean: false,
            max: 3,
            min: 0,
            name: "Bok Choy",
            unit: "",
            value: 2,
          },
          {
            id: "2",
            isBoolean: false,
            max: 20,
            min: 0,
            name: "Puju (Tofu skin)",
            unit: "",
            value: 12,
          },
          {
            id: "3",
            isBoolean: false,
            max: 10,
            min: 0,
            name: "Cabbage",
            unit: "",
            value: 2,
          },
          {
            id: "4",
            isBoolean: false,
            max: 200,
            min: 0,
            name: "Mungbean Sprout",
            unit: "g",
            value: 120,
          },
        ],
      } satisfies CustomType);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);
  return null;
};

export default Page;
