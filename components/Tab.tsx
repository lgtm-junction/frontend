"use client";

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import styled from "styled-components";

export const TabsContainer = styled.ul`
  display: flex;
  gap: 0 16px;
`;

const TabWrapper = styled.li<{ $active: boolean }>`
  padding: 8px 0;
  border-bottom: 2px solid
    ${({ $active }) => ($active ? "#000" : "transparent")};
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

interface Props extends PropsWithChildren<LinkProps> {
  active?: boolean;
}

export const Tab = (props: Props) => {
  const { active, children, ...rest } = props;
  return (
    <Link {...rest}>
      <TabWrapper $active={!!active}>{children}</TabWrapper>
    </Link>
  );
};
