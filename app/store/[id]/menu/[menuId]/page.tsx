"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { Octagon } from "@/components/octagon";
import { MenuType } from "@/types/type";
import { useCallback, useEffect, useState } from "react";
import { convertValueAndUnit } from "@/utils/convert";
import CustomOptionList from "@/components/Custom/OptionList";
import { CUSTOM } from "@/constants/dummy";
import CustomList from "@/components/Custom/List";

const MENU: MenuType = {
  id: 1,
  name: "Cafe Latte",
  description:
    "A cafe latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
  price: 5000,
  image: "/cafeLatte.jpeg",
  options: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  allergyInfo: ["Nuts"],
};

export default function Page() {
  const [openedCustom, setOpenedCustom] = useState<number | null>(null);
  const [screenHeight, setScreenHeight] = useState(2000);
  const [menu, setMenu] = useState<MenuType>();


  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <S.Container>
      <div className="w-[calc(100%+32px)] h-64 relative -translate-x-4 -mt-4">
        <img src={MENU.imageUrl} className="w-full h-full object-cover" />
      </div>
      <div className="p-1">
        <div className="flex flex-col items-start">
          <div className="text-h2 mt-8 mb-2">{MENU.name}</div>
          <div className="text-small text-gray-500">{MENU.description}</div>
          <div className="text-strong mt-4 my-2">Allergy</div>
          <div>{MENU.allergyInfo.join(", ")}</div>
          <div></div>
        </div>
        <Divider />
        <div className="flex flex-col gap-3">
          <div className="text-strong mt-4 my-2">Customs</div>
          <Promotion />
          <CustomList items={CUSTOM} setOpenedCustom={setOpenedCustom} />
        </div>
      </div>
      <BottomSheets
        initialTop={openedCustom ? 100 : screenHeight}
        close={openedCustom ? () => setOpenedCustom(null) : null}
      >
        <div className="px-4 py-4">
          {openedCustom && (
            <CustomOptionList
              id={openedCustom}
              close={() => setOpenedCustom(null)}
            />
          )}
        </div>
      </BottomSheets>
    </S.Container>
  );
}
