"use client";

import { TopNav } from "@/components/global/TopNav";
import { AlertProvider } from "@/context/useAlert";
import ContainerRefProvider from "@/context/useContainerRef";
import { useRef } from "react";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import "./tailwindcss.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <html data-theme="light">
      <body className="min-h-screen h-full">
        <div
          className="relative w-full max-w-[420px] min-h-screen h-full m-0 mx-auto flex flex-col flex-1 border"
          ref={ref}
        >
          <ContainerRefProvider containerRef={ref}>
            <AlertProvider>
              <StyledComponentsRegistry>
                <TopNav />
                <div className="h-full p-4">{children}</div>
              </StyledComponentsRegistry>
            </AlertProvider>
          </ContainerRefProvider>
        </div>
      </body>
    </html>
  );
}
