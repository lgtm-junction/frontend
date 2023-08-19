"use client";

import * as SS from "@/app/styles";
import { Button } from "@/components/global/Button";
import { Divider } from "@/components/global/Divider";
import { Octagon } from "@/components/octagon";
import { useAlert } from "@/context/useAlert";
import { Session } from "next-auth";
import { MdNavigateNext, MdPerson } from "react-icons/md";
import * as S from "./styles";

export default function MyPageView({ user }: { user: Session["user"] }) {
  const alertContext = useAlert();
  const { openAlert, closeAlert } = alertContext;

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
          <S.MenuListItem
            onClick={() =>
              openAlert(
                <>
                  <span>WIP</span>
                  <Button onClick={closeAlert}>Close</Button>
                </>
              )
            }
            borderBottom
          >
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
