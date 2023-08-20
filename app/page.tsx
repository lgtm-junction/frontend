"use client";
import { Tab, TabsContainer } from "@/components/Tab";
import { CustomRecipe } from "@/components/global/CustomRecipe";
import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { Search } from "@/components/global/Search";
import { Octagon, OctagonFader } from "@/components/octagon";
import { CustomCollectionName, getDocuments } from "@/firebase/getData";
import { CustomType } from "@/types/type";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import * as S from "./styles";

export default function Home() {
  const [customizations, setCustomizations] = useState<CustomType[]>([]);

  useEffect(() => {
    (async () => {
      // fetch all customizations
      try {
        const customs = await getDocuments<CustomType>(CustomCollectionName);
        setCustomizations(customs);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <S.Container>
      <div className="flex flex-col gap-4">
        <TabsContainer style={{ marginTop: -16 }}>
          <Tab href="/" active>
            Main
          </Tab>
          <Tab href="/quiz">Quiz</Tab>
        </TabsContainer>
        <Search />
        <Promotion />
        <div className="flex justify-around">
          {["sushi", "cake", "coffee"].map((item, idx) => (
            <Octagon
              key={`octagon-${idx}`}
              width="96px"
              $backgroundImage={`${item}.jpg`}
              className="flex justify-center items-center text-white text-2xl font-bold capitalize"
            >
              <OctagonFader />
              <span style={{ position: "relative" }}>{item}</span>
            </Octagon>
          ))}
        </div>
        <Divider />
        <Link
          href="/nearby"
          className="bg-black px-4 py-3 text-xl text-white font-semibold flex justify-between items-center"
        >
          Search Nearby
          <MdLocationOn />
        </Link>
        <div>
          {customizations.map((customization, idx) => (
            <CustomRecipe key={customization.id} {...customization} />
          ))}
        </div>
      </div>
    </S.Container>
  );
}
