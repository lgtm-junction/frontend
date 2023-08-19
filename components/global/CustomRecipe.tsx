import Image from "next/image";
import { Octagon } from "../octagon";
import { BsFillPersonFill } from "react-icons/bs";
export const CustomRecipe = () => {
  return (
    <div className="py-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-4">
            <div className="flex justify-center items-center">
              <Octagon width="85px">
                <BsFillPersonFill size={57} />
              </Octagon>
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">ALMOND EXTRA</p>
              <p className="text-xl pb-3">₩ 50,000</p>
              <p className="text-base text-gray-300">@shiftpsh</p>
            </div>
          </div>
          <Image
            src="RobotTwo.svg"
            width={32}
            height={32}
            alt="robot two icon"
            className="mr-1"
          />
        </div>
      </div>
    </div>
  );
};
