"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import CustomList from "@/components/Custom/List";
import CustomOptionList from "@/components/Custom/OptionList";
import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { CUSTOM } from "@/constants/dummy";
import { MenuCollectionName, getDocument } from "@/firebase/getData";
import { MenuType } from "@/types/type";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Page() {
  const { menuId } = useParams();
  const [openedCustom, setOpenedCustom] = useState<string | null>(null);
  const [screenHeight, setScreenHeight] = useState(2000);
  const [menu, setMenu] = useState<MenuType | null>(null);

  const loadMenu = useCallback(async () => {
    if (typeof menuId !== "string") return;
    try {
      const res = await getDocument<MenuType>(MenuCollectionName, menuId);
      setMenu(res);
    } catch (e) {
      console.log(e);
    }
  }, [menuId]);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    loadMenu();
  }, [loadMenu]);

  return (
    <S.Container>
      {menu ? (
        <>
          <div className="w-[calc(100%+32px)] h-64 relative -translate-x-4 -mt-4">
            <img src={menu.imageUrl} className="w-full h-full object-cover" />
          </div>
          <div className="p-1">
            <div className="flex flex-col items-start">
              <div className="text-h2 mt-8 mb-2">{menu.name}</div>
              <div className="text-small text-gray-500">{menu.description}</div>
              <div className="text-strong mt-4 my-2">Allergy</div>
              <div>
                {menu.allergyInfo.length ? menu.allergyInfo.join(", ") : "None"}
              </div>
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
        </>
      ) : (
        <>Loading...</>
      )}
    </S.Container>
  );
}
