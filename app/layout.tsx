import StyledComponentsRegistry from "./registry";
import "./globals.css";
import "./tailwindcss.css";
import { TopNav } from "@/components/global/TopNav";

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
          </StyledComponentsRegistry>
        </div>
      </body>
    </html>
  );
}
