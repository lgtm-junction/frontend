import StyledComponentsRegistry from "./registry";
import "./globals.css";
import "./tailwindcss.css";
import { TopNav } from "@/components/global/TopNav";
import { BottomNav } from "@/components/global/BottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light">
      <body>
        <div className="w-[420px] h-screen m-0 mx-auto flex flex-col flex-1 border">
          <StyledComponentsRegistry>
            <TopNav />
            <div className="h-full p-4">{children}</div>
            <BottomNav />
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
