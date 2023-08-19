import * as S from "@/app/styles";
import Image from "next/image";

import { MdPerson } from "react-icons/md";

export const TopNav = () => {
  return (
    <div
      className="h-[60px] flex justify-between content-center p-4"
      style={{ zIndex: "99999999" }}
    >
      <S.Link href="/">
        <Image width={110} height={29} src="/Logo.svg" alt="romakase" />
      </S.Link>
      <S.Link href="/mypage" style={{ color: "inherit" }}>
        <MdPerson size="32px" />
      </S.Link>
    </div>
  );
};
