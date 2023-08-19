import styled from "styled-components";

export const MypageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 48px;
`;

export const ProfileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  gap: 4px;
`;

export const UserName = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const UserId = styled.div`
  font-family: "Pretendard";
  color: var(--gray-500, #778288);
  font-family: Pretendard Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`;

export const EditButton = styled.button`
  display: flex;
  width: 88px;
  height: 36px;
  background-color: #0b0d00;
  color: white;
  padding: 6px;
  justify-content: center;
  align-items: center;
`;

export const MenuListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuListItem = styled.div<{ borderBottom?: boolean }>`
  display: flex;
  width: 364px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  ${(props) => (props.borderBottom ? "border-bottom: 1px solid #E2E7E9" : "")};
`;

export const MenuTitle = styled.div`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
