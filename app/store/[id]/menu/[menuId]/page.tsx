import * as S from "@/app/styles";
import Icons from "@/components/Icons";
import { Divider } from "@/components/global/Divider";
import Promotion from "@/components/global/Promotion";
import { Octagon } from "@/components/octagon";
import Link from "next/link";

const MENU = {
  id: 1,
  name: "Cafe Latte",
  description:
    "A cafe latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
  price: 5000,
  image: "/cafeLatte.jpeg",
  customOptions: ["Milk Amount", "Grinding", "asdfasdf", "asdfdfs"],
};

const CUSTOM = [
  {
    id: "1",
    name: "ALMOND EXTRA",
    price: 5000,
    tags: ["SWEET", "NUTS"],
    options: ["Almond syrup × 9", "Almond slice × 5", "Almond slice × 5"],
    author: {
      id: "shiftpsh",
      image:
        "https://pbs.twimg.com/profile_images/1559136628609732608/hoYcE2w6_400x400.jpg",
    },
  },
  {
    id: "1",
    name: "ALMOND EXTRA",
    price: 5000,
    tags: ["SWEET", "NUTS"],
    options: ["Almond syrup × 9", "Almond slice × 5", "Almond slice × 5"],
    author: {
      id: "shiftpsh",
      image:
        "https://pbs.twimg.com/profile_images/1559136628609732608/hoYcE2w6_400x400.jpg",
    },
  },
];

export default function Page({ params }: { params: { menuId: string } }) {
  return (
    <S.Container>
      <div className="w-[calc(100%+32px)] h-64 relative -translate-x-4 -mt-4">
        <img src={MENU.image} className="w-full h-full object-cover" />
      </div>
      <div className="p-1">
        <div className="flex flex-col items-start">
          <div className="text-h2 mt-8 mb-2">{MENU.name}</div>
          <div className="text-small text-gray-500">{MENU.description}</div>
          <div className="text-strong mt-4 my-2">Allergy</div>
          <div>Nuts</div>
          <div></div>
        </div>
        <Divider />
        <div className="flex flex-col gap-3">
          <div className="text-strong mt-4 my-2">Customs</div>
          <Promotion />
          {CUSTOM.map((custom) => (
            <Link
              href={`./${params.menuId}/custom`}
              className="flex gap-4 border-b border-b-gray-100 py-4"
              key={custom.id}
            >
              <Octagon
                backgroundImage={custom.author.image}
                width="80px"
                className="bg-cover shrink-0"
              />

              <div className="flex flex-col">
                <div className="text-strong">{custom.name}</div>
                <div className="text-p mb-2">
                  ₩ {custom.price.toLocaleString()}
                </div>

                <div className="text-small">
                  <div className="text-gray-500">Custom options</div>
                  <ul className="list-disc list-inside">
                    {custom.options.slice(0, 2).map((option, i) => (
                      <li key={i}>{option}</li>
                    ))}
                  </ul>
                  {custom.options.length > 2 && (
                    <div>+ {custom.options.length - 2} More</div>
                  )}
                </div>
                <div className="mt-2 text-gray-500">@{custom.author.id}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </S.Container>
  );
}
