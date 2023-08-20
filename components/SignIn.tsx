"use client";

import * as S from "@/app/styles";
import { Button } from "@/components/global/Button";
import Image from "next/image";
import { BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { Tab, TabsContainer } from "./Tab";

export default function SignInView({ quiz = false }: { quiz?: boolean }) {
  return (
    <S.Container>
      {quiz && (
        <TabsContainer style={{ marginTop: -16 }}>
          <Tab href="/">Main</Tab>
          <Tab href="/quiz" active>
            Quiz
          </Tab>
        </TabsContainer>
      )}
      <div className="w-full h-full py-48 flex flex-col items-center gap-24 justify-center">
        <Image width={220} height={58} src="/Logo.svg" alt="romakase" />
        <Button
          className="w-full gap-2 text-strong"
          onClick={() => {
            signIn("google");
          }}
        >
          <BsGoogle />
          Login With Google
        </Button>
      </div>
    </S.Container>
  );
}
