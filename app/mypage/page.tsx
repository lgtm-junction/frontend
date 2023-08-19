import { authOptions } from "../api/auth/[...nextauth]/options";
import MyPageView from "./view";
import { getServerSession } from "next-auth/next";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return session?.user ? <MyPageView /> : <></>;
}
