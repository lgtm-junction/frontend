"use client";

import * as S from "@/app/styles";
import { Octagon } from "@/components/octagon";
import { useAlert } from "@/context/useAlert";
import { MdNavigateNext, MdPerson } from "react-icons/md";
import styled from "styled-components";

const MypageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 48px;
`;

const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
`;

const UserName = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

const UserId = styled.div`
  font-family: "Pretendard";
  color: var(--gray-500, #778288);
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

const EditButton = styled.button`
  display: flex;
  width: 88px;
  height: 36px;
  background-color: #0b0d00;
  color: white;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;

const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MenuListItem = styled.div<{ borderBottom?: boolean }>`
  display: flex;
  width: 364px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.borderBottom ? "border-bottom: 1px solid #E2E7E9" : "")};
`;

const MenuTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default function Page() {
  const alertContext = useAlert();

  const { setOpen } = alertContext;

  return (
    <S.Container>
      <MypageContainer>
        <ProfileContainer>
          <Octagon width="132px">
            <MdPerson size="84px" />
          </Octagon>
          <UserNameContainer>
            <UserName>Healthy food-fighter</UserName>
            <UserId>#0806</UserId>
          </UserNameContainer>
          <EditButton>VIP</EditButton>
        </ProfileContainer>
        <MenuListContainer>
          <MenuListItem onClick={() => setOpen()} borderBottom>
            <MenuTitle>Order history</MenuTitle>
            <MdNavigateNext size="24px" />
          </MenuListItem>
          <S.Link
            href="/mypage/preset"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuListItem>
              <MenuTitle>My custom presets</MenuTitle>
              <MdNavigateNext size="24px" />
            </MenuListItem>
          </S.Link>
        </MenuListContainer>
      </MypageContainer>
    </S.Container>
  );
}
