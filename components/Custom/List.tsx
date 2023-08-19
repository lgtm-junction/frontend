import { CUSTOM } from "@/constants/dummy";
import CustomItem from "./Item";
import { useCart } from "@/context/useCart";
import { useState } from "react";

export default function CustomList({ id }: { id: number }) {
  const { addCart } = useCart();
  const [item, setItem] = useState(
    CUSTOM.filter((custom) => custom.id === id)[0]!
  );
  const changeOption = (optionId: number, newValue: number) => {
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
        <CustomItem
          key={option.id}
          option={option}
          changeOption={(newValue) => changeOption(option.id, newValue)}
        />
      ))}
      <div className="fixed inset-x-0 bottom-[40px] h-24 flex gap-4 p-4 text-white text-h2">
        <button
          className="bg-gray-500 h-16 w-full"
          onClick={() => addCart(item)}
        >
          Cart
        </button>
        <button className="bg-black h-16 w-full">Order</button>
      </div>
    </>
  );
}
