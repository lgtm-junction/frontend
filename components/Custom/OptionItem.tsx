import { CustomOptionType } from "@/types/type";
import cc from "classcat";
import { useState } from "react";

export default function CustomOptionItem({
  option,
  changeOption,
}: {
  option: CustomOptionType;
  changeOption: (newValue: number) => void;
}) {
  const [value, setValue] = useState(option.value);

  const handleSetValue = (value: number) => {
    setValue(value);
    changeOption(value);
  };

  return (
    <div
      className={cc([
        "border-b border-b-gray-100 last-of-type:border-b-transparent",
        !option.isBoolean && "collapse collapse-arrow",
      ])}
    >
      {!option.isBoolean && <input type="checkbox" name="my-accordion-4" />}
      <div className="collapse-title pr-3">
        <div className="text-strong flex items-center justify-between">
          {option.name}
          {option.isBoolean && (
            <input
              type="checkbox"
              className="toggle"
              defaultChecked={option.value === 1}
              onChange={() => handleSetValue(1 - value)}
            />
          )}
        </div>
        {!option.isBoolean && (
          <div className="text-p">
            {value}
            {option.unit}
          </div>
        )}
      </div>
      {!option.isBoolean && (
        <div className="collapse-content">
          <input
            type="range"
            min={option.min}
            max={option.max}
            defaultValue={option.value}
            onChange={(e) => handleSetValue(parseInt(e.target.value))}
            className="range range-xs w-full [--range-shdw:215_0%_0%]"
          />
          <div className="flex items-center text-sm justify-between">
            <div>
              {option.min}
              {option.unit}
            </div>
            <div>
              {option.max}
              {option.unit}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
