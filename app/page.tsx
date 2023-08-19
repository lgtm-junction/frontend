"use client";
import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { Search } from "@/components/global/Search";
import { Octagon } from "@/components/octagon";
import { MdLocationOn } from "react-icons/md";
import * as S from "./styles";
import { CustomRecipe } from "@/components/global/CustomRecipe";
import { useEffect, useState } from "react";
import { getAllFoods } from "@/firebase/getData";
import { FoodCustomization } from "@/firebase/models/foodCustomization";
import Link from "next/link";

type FoodCustomizationWithFoodPrice = FoodCustomization & {
  foodPrice: number;
}

export default function Home() {
  const [customizations, setCustomizations] = useState<
    FoodCustomizationWithFoodPrice[]
  >([]);

  useEffect(() => {
    (async () => {
      // fetch all customizations
      const foods = await getAllFoods();
      const foodCustomizations = foods.flatMap((food) =>
        food.customizations?.map((customization) => ({
          ...customization,
          foodPrice: food.price,
        })) ?? []
      );
      setCustomizations(foodCustomizations);
    })();
  }, []);

  return (
    <S.Container>
      <div className="flex flex-col gap-4">
        <Search />
        <Promotion />
        <div className="flex justify-around">
          {["sushi", "cake", "coffee"].map((item, idx) => (
            <Octagon
              key={`octagon-${idx}`}
              width="96px"
              backgroundImage={`${item}.jpg`}
              className="flex justify-center items-center text-white text-2xl font-bold capitalize"
            >
              {item}
            </Octagon>
          ))}
        </div>
        <Divider />
        <Link
          href="/nearby"
          className="bg-black px-4 py-3 text-xl text-white font-semibold flex justify-between"
        >
          Search Nearby
          <MdLocationOn />
        </Link>
        <div>
          {customizations.map((customization, idx) => (
            <CustomRecipe key={customization.id} {...customization} />
          ))}
        </div>
      </div>
    </S.Container>
  );
}
