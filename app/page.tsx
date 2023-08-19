"use client";
import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { Search } from "@/components/global/Search";
import { Octagon } from "@/components/octagon";
import { MdLocationOn } from "react-icons/md";
import * as S from "./styles";
import { CustomRecipe } from "@/components/global/CustomRecipe";
import { useEffect, useState } from "react";
import { getAllMenus } from "@/firebase/getData";
import Link from "next/link";
import { CustomType } from "@/types/type";

type CustomizationWithPrice = CustomType & {
  menuPrice: number;
}

export default function Home() {
  const [customizations, setCustomizations] = useState<
    CustomizationWithPrice[]
  >([]);

  useEffect(() => {
    (async () => {
      // fetch all customizations
      const menus = await getAllMenus();
      const menuCustomizations = menus.flatMap((menu) =>
        menu.customizations?.map((customization) => ({
          ...customization,
          menuPrice: menu.price,
        })) ?? []
      );
      setCustomizations(menuCustomizations);
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
