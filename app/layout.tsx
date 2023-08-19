import "./globals.css";
import "./tailwindcss.css";
import CartProvider from "@/context/useCart";

import { Session } from "next-auth";
import { headers } from "next/headers";
import Container from "./container";
import AuthContext from "@/context/useSession";

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
    <html data-theme="light">
      <AuthContext session={session}>
        <CartProvider>
          <body className="min-h-screen h-full">
            <Container>{children}</Container>
          </body>
        </CartProvider>
      </AuthContext>
    </html>
  );
}
