import { authOptions } from "../api/auth/[...nextauth]/options";
import View from "./view";
import { getServerSession } from "next-auth/next";
import SignInView from "@/components/SignIn";

export default async function Page() {
  const session = await getServerSession(authOptions);

  return session?.user ? <View /> : <SignInView quiz />;
}
