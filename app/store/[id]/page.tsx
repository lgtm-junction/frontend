"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import Icons from "@/components/Icons";
import Link from "next/link";

const MENUS = [
  {
    id: 1,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
  {
    id: 2,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
  {
    id: 3,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
  {
    id: 4,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
  {
    id: 5,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
  {
    id: 6,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
  {
    id: 7,
    name: "Cafe Latte",
    price: 5000,
    image: "/cafeLatte.jpeg",
    customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
  },
];

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <S.Container>
        <div>
          <h1 className="mt-4 mb-2 font-bold text-xl text-center">
            CAFE JUNCTION
          </h1>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-fit px-4 py-2 mb-4 bg-gray-50">
              마쉿는 커피를 만들어 드릴게욤,,
            </div>
            <div className="w-24 h-24 relative">
              <img
                src="/face.png"
                className="w-full h-full object-contain"
                alt="name"
              />
              <img
                src="/jako_arm_right.png"
                className="absolute -bottom-4 left-12 origin-[50%_90%] animate-jako-right"
                alt="jako arm"
              />
              <img
                src="/jako_arm_left.png"
                className="absolute -bottom-4 right-12 origin-[50%_90%] animate-jako-left"
                alt="jako arm"
              />
            </div>
            <div className="w-32 -mt-6">
              <img src="/apron.png" />
            </div>
          </div>
        </div>
      </S.Container>
      <BottomSheets initialTop={350}>
        <div className="w-full flex flex-col px-4">
          {MENUS.map((menu) => (
            <Link
              href={`./${params.id}/menu/${menu.id}`}
              className="flex gap-3 items-center border-b border-b-gray-100 py-4"
              key={menu.id}
            >
              <div className="w-20 h-20 border border-black">
                <img src={menu.image} className="w-full h-full object-cover" />
              </div>

              <div className="flex flex-col">
                <div className="text-strong">{menu.name}</div>
                <div className="text-p mb-2">
                  ₩ {menu.price.toLocaleString()}
                </div>

                <div className="flex gap-2 items-center">
                  <Icons.RobotArm className="w-8 h-8" />
                  <div>
                    <div className="text-sm text-gray-500">Custom options</div>
                    <div className="text-sm">
                      {menu.customOptions.slice(0, 2).map((option, i) => (
                        <span
                          key={i}
                          className="after:content-[',_'] last-of-type:after:content-['']"
                        >
                          {option}
                        </span>
                      ))}
                      {menu.customOptions.length > 2 &&
                        `, +${menu.customOptions.length - 2}`}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </BottomSheets>
    </>
  );
}
