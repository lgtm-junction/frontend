import { CUSTOM } from "@/constants/dummy";
import CustomOptionItem from "./OptionItem";
import { useCart } from "@/context/useCart";
import { useState } from "react";

export default function CustomOptionList({
  id,
  close,
}: {
  id: string;
  close: () => void;
}) {
  const { addCart } = useCart();
  const originalItem = CUSTOM.filter((custom) => custom.id === id)[0]!;
  const [item, setItem] = useState(originalItem);
  const changeOption = (optionId: string, newValue: number) => {
    setItem((item) => {
      return {
        ...item,
        options: item.options.map((option) => {
          if (option.id === optionId) return { ...option, value: newValue };
          else return option;
        }),
      };
    });
  };
  return (
    <>
      {item.options.map((option) => (
        <CustomOptionItem
          key={option.id}
          option={option}
          changeOption={(newValue) => changeOption(option.id, newValue)}
        />
      ))}
      <div className="fixed inset-x-0 bottom-[40px] h-24 flex gap-4 p-4 text-white text-h2">
        <button
          className="bg-gray-500 h-16 w-full"
          onClick={() => {
            addCart({
              ...item,
              isCustomized: Object.keys(item).every(
                (key) =>
                  item[key as keyof typeof item] ===
                  originalItem[key as keyof typeof item]
              ),
            });
            close();
          }}
        >
          Cart
        </button>
        <button className="bg-black h-16 w-full">Order</button>
      </div>
    </>
  );
}
