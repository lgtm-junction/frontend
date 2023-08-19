"use client";

import StyledComponentsRegistry from "./registry";
import "./globals.css";
import "./tailwindcss.css";
import { TopNav } from "@/components/global/TopNav";
import ContainerRefProvider from "@/context/useContainerRef";
import { useRef } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <html data-theme="light">
      <body>
        <div
          className="relative w-full max-w-[420px] h-screen m-0 mx-auto flex flex-col flex-1 border"
          ref={ref}
        >
          <ContainerRefProvider containerRef={ref}>
            <StyledComponentsRegistry>
              <TopNav />
              {JSON.stringify(ref.current)}
              <div className="h-full p-4">{children}</div>
            </StyledComponentsRegistry>
          </ContainerRefProvider>
        </div>
      </body>
    </html>
  );
}
