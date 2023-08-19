import CartProvider from "@/context/useCart";
import "./globals.css";
import "./tailwindcss.css";

import { BodyBackground } from "@/components/BodyBackground";
import AuthContext from "@/context/useSession";
import { Session } from "next-auth";
import { headers } from "next/headers";
import Container from "./container";
import StyledComponentsRegistry from "./registry";

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    }
  );

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");
  return (
    <StyledComponentsRegistry>
      <html data-theme="light">
        <head>
          <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
            rel="stylesheet"
          />
        </head>
        <AuthContext session={session}>
          <CartProvider>
            <body className="min-h-screen h-full">
              <Container>{children}</Container>
              <BodyBackground />
            </body>
          </CartProvider>
        </AuthContext>
      </html>
    </StyledComponentsRegistry>
  );
}
