import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/options";
import MyPageView from "./view";

export default async function Page() {
  return <MyPageView />;
}
