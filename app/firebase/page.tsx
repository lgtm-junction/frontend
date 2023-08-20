"use client";

import { CustomCollectionName, appendToDatabase } from "@/firebase/getData";
import { CustomType } from "@/types/type";
import { useEffect } from "react";

const Page = () => {
  const handleFetch = async () => {
    try {
      await appendToDatabase(CustomCollectionName, {
        id: "2",
        author: {
          id: "havana723",
          image:
            "https://pbs.twimg.com/profile_images/1666398962251870209/gjX4-Mb7_400x400.jpg",
        },
        menuId: "aSsWaPIV33k72K5fHwRR",
        name: "Gcova",
        price: 20000,
        tags: ["SPICY"],
        options: [
          {
            id: "1",
            isBoolean: false,
            max: 100,
            min: 1,
            name: "Strength of Yangnyeom",
            unit: "%",
            value: 98,
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
