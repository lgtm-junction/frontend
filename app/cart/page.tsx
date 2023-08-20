"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import CustomList from "@/components/Custom/List";
import CustomOptionList from "@/components/Custom/OptionList";
import { Button } from "@/components/global/Button";
import { useAlert } from "@/context/useAlert";
import { useCart } from "@/context/useCart";
import { useEffect, useState } from "react";

export default function Page() {
  const { cart } = useCart();
  const [openedCustom, setOpenedCustom] = useState<string | null>(null);
  const [screenHeight, setScreenHeight] = useState(2000);
  useEffect(() => {
    setScreenHeight(window.innerHeight);
  }, []);
  const { openAlert, closeAlert } = useAlert();
  const handleClick = () => {
    openAlert(
      <>
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Work in progress!</p>
          <div style={{ height: 16 }} />
          <Button onClick={closeAlert} className="text-strong">
            Close
          </Button>
        </div>
      </>
    );
  };

  return (
    <S.Container>
      <div className="w-full h-full flex flex-col">
        <CustomList items={cart} setOpenedCustom={setOpenedCustom} isCart />
        <Button className="text-strong" onClick={handleClick}>
          Order
        </Button>
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
