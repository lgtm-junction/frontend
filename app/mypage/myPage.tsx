"use client";

import * as SS from "@/app/styles";
import * as S from "./styles";
import { Octagon } from "@/components/octagon";
import { useAlert } from "@/context/useAlert";
import { MdNavigateNext, MdPerson } from "react-icons/md";

export default function MyPageView() {
  const alertContext = useAlert();
  const { setOpen } = alertContext;

  return (
    <SS.Container>
      <S.MypageContainer>
        <S.ProfileContainer>
          <Octagon width="132px">
            <MdPerson size="84px" />
          </Octagon>
          <S.UserNameContainer>
            <S.UserName>Healthy food-fighter</S.UserName>
            <S.UserId>#0806</S.UserId>
          </S.UserNameContainer>
          <S.EditButton>VIP</S.EditButton>
        </S.ProfileContainer>
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
