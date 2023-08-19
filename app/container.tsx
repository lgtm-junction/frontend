"use client";

import CartButton from "@/components/global/CartButton";
import { TopNav } from "@/components/global/TopNav";
import { AlertProvider } from "@/context/useAlert";
import ContainerRefProvider from "@/context/useContainerRef";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin-left: 50vw;
  max-width: ${(100 / 16) * 9}vh;
  background: white;
  @media (max-aspect-ratio: 5/4) {
    margin: 0 auto;
    max-width: ${(100 / 3) * 2}vh;
  }
`;

const Fader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0 auto;
  max-width: ${(100 / 16) * 9}vh;
  pointer-events: none;
  @media (max-aspect-ratio: 5/4) {
    max-width: ${(100 / 3) * 2}vh;
  }
`;

export default function Container({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const path = usePathname();
  const showCart =
    path.match(/^\/(cart|order|nearby|store)(\/.*)?$/g) || path === "/";

  return (
    <Wrapper className="min-h-screen m-0 mx-auto flex flex-col flex-1 border">
      <Fader className="h-screen z-[101]" ref={ref}>
        {showCart && <CartButton />}
      </Fader>
      <ContainerRefProvider containerRef={ref}>
        <AlertProvider>
          <TopNav />
          <div className="h-full p-4">{children}</div>
        </AlertProvider>
      </ContainerRefProvider>
    </Wrapper>
  );
}
