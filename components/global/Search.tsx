"use client";
import { useAlert } from "@/context/useAlert";
import { AiOutlineSearch } from "react-icons/ai";
import { Button } from "./Button";

export const Search = () => {
  const { openAlert, closeAlert } = useAlert();
  const handleClick = () => {
    openAlert(
      <>
        <div
          style={{
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>Work in progress!</p>
          <div style={{ height: 16 }} />
          <Button onClick={closeAlert} className="text-strong">
            Close
          </Button>
        </div>
      </>
    );
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
        placeholder="Enter your search here"
        type="text"
        onKeyDown={handleOnKeyDown}
      />
      <button onClick={handleClick}>
        <AiOutlineSearch size={20} />
      </button>
    </label>
  );
};
