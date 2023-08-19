"use client";

import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import Icons from "@/components/Icons";
export default function Page() {
  return (
    <>
      <S.Container>
        <div>
          <h1>가게 메인 페이지</h1>
          <div>
            메인 로봇 사진or이미지 사용하는 로봇 모델/관리 등등 메뉴리스트
            가게정보
          </div>
          <S.Link href="/store/1/custom">메뉴 커스텀 페이지</S.Link>
          <S.Link href="/store/1/order">주문 페이지</S.Link>
        </div>
      </S.Container>
      <BottomSheets height={550}>
        <div className="w-full flex flex-col px-4">
          <div className="flex gap-3 items-center border-b border-b-gray-100 py-4">
            <div className="w-20 h-20 border border-black">
              <img src="/cafe.jpg" className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col">
              <div className="text-strong">Cafe Latte</div>
              <div className="text-p mb-2">₩ 50,000</div>

              <div className="flex gap-2 items-center">
                <Icons.RobotArm className="w-8 h-8" />
                <div>
                  <div className="text-sm text-gray-500">Custom options</div>
                  <div className="text-sm">Milk amount, Grinding, +2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BottomSheets>
    </>
  );
}
