"use client";
import { AiOutlineSearch } from "react-icons/ai";

export const Search = () => {
  const handleClick = () => {
    alert("search");
  };
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <label className="h-12 w-full bg-gray-100 pl-4 pr-4 py-2 rounded-lg flex gap-2 items-center">
      <input
        className="input w-full bg-none !outline-none bg-opacity-0 px-0"
        placeholder="뭐가 드시고 싶으신가욤... 로봇이 다 해드랴욤..."
        type="text"
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleClick}>
        <AiOutlineSearch size={20} />
      </button>
    </label>
  );
};
