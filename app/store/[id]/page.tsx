"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import Icons from "@/components/Icons";
import { getDocument, getMenus } from "@/firebase/getData";
import {
  MenuType,
  RestaurantCollectionName,
  RestaurantType,
} from "@/types/type";
import Link from "next/link";
import { useEffect, useState } from "react";

type RestaurantWithMenu = RestaurantType & { menus: MenuType[] };

export default function Page({ params }: { params: { id: string } }) {
  const [restaurant, setRestaurant] = useState<RestaurantWithMenu>();

  useEffect(() => {
    (async () => {
      const restaurantDoc = await getDocument<RestaurantType>(
        RestaurantCollectionName,
        params.id
      );

      const restaurant = restaurantDoc;

      if (!restaurant) {
        // 404 case
        throw new Error("Restaurant not found");
      }

      const menus = await getMenus(restaurant.menuIds);
      setRestaurant({
        ...restaurant,
        menus,
      });
    })();
  }, [params.id]);

  return (
    <>
      <S.Container>
        <div>
          <h1 className="mt-4 mb-2 font-bold text-xl text-center">
            {restaurant?.name}
          </h1>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-fit px-4 py-2 mb-4 bg-gray-50">
              {restaurant?.robot.comment}
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
          {restaurant?.menus.map((menu) => (
            <Link
              href={`./${params.id}/menu/${menu.id}`}
              className="flex gap-4 items-center border-b border-b-gray-100 last-of-type:border-b-transparent py-4"
              key={menu.id}
            >
              <div className="w-24 h-24">
                <img
                  src={menu.imageUrl}
                  className="w-full h-full object-cover"
                />
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
                      {menu.options?.slice(0, 2).map((option, i) => (
                        <span
                          key={i}
                          className="after:content-[',_'] last-of-type:after:content-['']"
                        >
                          {option}
                        </span>
                      ))}
                      {(menu.options?.length ?? 0) > 2 &&
                        `, +${(menu.options?.length ?? 0) - 2}`}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )) ?? <p className="flex justify-center items-center">Loading...</p>}
        </div>
      </BottomSheets>
    </>
  );
}
