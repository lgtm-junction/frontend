"use client";

import { TopNav } from "@/components/global/TopNav";
import { AlertProvider } from "@/context/useAlert";
import ContainerRefProvider from "@/context/useContainerRef";
import { useRef } from "react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import "./tailwindcss.css";
import CartProvider from "@/context/useCart";
import { BsCart } from "react-icons/bs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <html data-theme="light">
      <body className="min-h-screen h-full">
        <div className="relative w-full max-w-[420px] min-h-screen h-full m-0 mx-auto flex flex-col flex-1 border">
          <div
            className="fixed top-0 w-full max-w-[420px] h-screen pointer-events-none z-[101]"
            ref={ref}
          >
            <div className="absolute bottom-8 right-8 rounded-full bg-black w-16 h-16 flex items-center justify-center">
              <BsCart size="28px" color="white" />
            </div>
          </div>
          <ContainerRefProvider containerRef={ref}>
            <AlertProvider>
              <CartProvider>
                <StyledComponentsRegistry>
                  <TopNav />
                  <div className="h-full p-4">{children}</div>
                </StyledComponentsRegistry>
              </CartProvider>
            </AlertProvider>
          </ContainerRefProvider>
        </div>
      </body>
    </html>
  );
}
