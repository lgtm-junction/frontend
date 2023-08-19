import * as S from "@/app/styles";
import BottomSheets from "@/components/BottomSheets";
import Map from "@/components/Map";
import Link from "next/link";
import Icons from "@/components/Icons";
export default function Nearby() {
  const bexcoLatLng = { latitude: 35.1689766, longitude: 129.1360411 };
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
  return (
    <S.Container>
      <Map
        style={{ width: `100%`, height: 400 }}
        center={bexcoLatLng}
        zoom={13}
      />
      <BottomSheets initialTop={350}>
        <div className="w-full flex flex-col px-4">
          {/* todo: fix href */}
          {MENUS.map((menu) => (
            <Link
              href="/store/1"
              className="flex gap-3 items-center border-b border-b-gray-100 last-of-type:border-b-transparent py-4"
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
    </S.Container>
  );
}
