"use client";

import * as SS from "@/app/styles";
import * as S from "./styles";
import { Octagon } from "@/components/octagon";
import { useAlert } from "@/context/useAlert";
import { MdNavigateNext, MdPerson } from "react-icons/md";
import { Session } from "next-auth";
import { Divider } from "@/components/global/Divider";

export default function MyPageView({ user }: { user: Session["user"] }) {
  const alertContext = useAlert();
  const { setOpen } = alertContext;

  return (
    <SS.Container>
      <S.MypageContainer>
        <S.ProfileContainer>
          <Octagon width="132px">
            {user?.image ? (
              <img src={user.image} className="w-full h-full object-cover" />
            ) : (
              <MdPerson size="84px" />
            )}
          </Octagon>
          <S.UserNameContainer>
            <S.UserName>{user?.name}</S.UserName>
            <S.UserId>{user?.email}</S.UserId>
          </S.UserNameContainer>
        </S.ProfileContainer>
        <Divider />
        <S.MenuListContainer>
          <S.MenuListItem onClick={() => setOpen()} borderBottom>
            <S.MenuTitle>Order history</S.MenuTitle>
            <MdNavigateNext size="24px" />
          </S.MenuListItem>
          <SS.Link
            href="/mypage/preset"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <S.MenuListItem>
              <S.MenuTitle>My custom presets</S.MenuTitle>
              <MdNavigateNext size="24px" />
            </S.MenuListItem>
          </SS.Link>
        </S.MenuListContainer>
      </S.MypageContainer>
    </SS.Container>
  );
}
