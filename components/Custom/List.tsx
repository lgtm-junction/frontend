import { convertValueAndUnit } from "@/utils/convert";
import { Octagon } from "../octagon";
import { Dispatch, SetStateAction } from "react";
import { MdClose } from "react-icons/md";
import { CustomType } from "@/types/type";
import { useCart } from "@/context/useCart";

export default function CustomList({
  items,
  setOpenedCustom,
  isCart = false,
}: {
  items: CustomType[];
  setOpenedCustom: Dispatch<SetStateAction<number | null>>;
  isCart?: boolean;
}) {
  const { removeCart } = useCart();
  return (
    <>
      {items.map((custom, i) => (
        <div
          className="flex relative gap-4 border-b border-b-gray-100 last-of-type:border-b-transparent py-4 cursor-pointer"
          key={custom.id}
          onClick={() => setOpenedCustom(custom.id)}
        >
          <Octagon
            backgroundImage={custom.author.image}
            width="80px"
            className="bg-cover shrink-0"
          />

          <div className="flex flex-col">
            <div className="text-strong">{custom.name}</div>
            <div className="text-p mb-2">₩ {custom.price.toLocaleString()}</div>

            <div className="text-small">
              <div className="text-gray-500">Custom options</div>
              <ul className="list-disc list-inside">
                {custom.options
                  .filter((option) => option.value > 0)
                  .slice(0, 2)
                  .map((option, i) => (
                    <li key={i}>
                      {option.name}{" "}
                      {convertValueAndUnit(
                        option.value,
                        option.unit,
                        option.isBoolean
                      )}
                    </li>
                  ))}
              </ul>
              {custom.options.length > 2 && (
                <div>+ {custom.options.length - 2} More</div>
              )}
            </div>
            <div className="mt-2 text-gray-500">@{custom.author.id}</div>
          </div>

          {isCart && (
            <button
              className="absolute right-4 top-4"
              onClick={(e) => {
                e.stopPropagation();
                removeCart(i);
              }}
            >
              <MdClose size="24px" color="black" />
            </button>
          )}
        </div>
      ))}
    </>
  );
}
