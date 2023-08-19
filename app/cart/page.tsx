"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import CustomList from "@/components/Custom/List";
import CustomOptionList from "@/components/Custom/OptionList";
import { useCart } from "@/context/useCart";
import { useEffect, useState } from "react";

export default function Page() {
  const { cart } = useCart();
  const [openedCustom, setOpenedCustom] = useState<string | null>(null);
  const [screenHeight, setScreenHeight] = useState(2000);
  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);

  return (
    <S.Container>
      <div>
        <CustomList items={cart} setOpenedCustom={setOpenedCustom} isCart />
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
