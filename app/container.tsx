"use client";

import CartButton from "@/components/global/CartButton";
import { TopNav } from "@/components/global/TopNav";
import { AlertProvider } from "@/context/useAlert";
import ContainerRefProvider from "@/context/useContainerRef";
import { useRef } from "react";
import StyledComponentsRegistry from "./registry";

export default function Container({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative w-full max-w-[420px] min-h-screen h-full m-0 mx-auto flex flex-col flex-1 border"
      style={{ backgroundColor: "white", marginLeft: "50vw" }}
    >
      <div
        className="fixed top-0 w-full max-w-[420px] h-screen pointer-events-none z-[101]"
        ref={ref}
      >
        <CartButton />
      </div>
      <ContainerRefProvider containerRef={ref}>
        <AlertProvider>
          <StyledComponentsRegistry>
            <TopNav />
            <div className="h-full p-4">{children}</div>
          </StyledComponentsRegistry>
        </AlertProvider>
      </ContainerRefProvider>
    </div>
  );
}
