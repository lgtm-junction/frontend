import * as S from "@/app/styles";
import Image from "next/image";

export const TopNav = () => {
  return (
    <div
      className="h-16 border flex justify-between p-4"
      style={{ zIndex: "99999999" }}
    >
      <S.Link href="/">
        <Image width={110} height={29} src="/Logo.svg" alt="romakase" />
      </S.Link>
      <div>logout?</div>
    </div>
  );
};
