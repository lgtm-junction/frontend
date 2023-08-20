import { CustomType } from "@/types/type";
import Image from "next/image";
import { Octagon } from "../octagon";

interface CustomRecipeProps extends CustomType {}

export const CustomRecipe: React.FC<CustomRecipeProps> = (props) => {
  const { author } = props;
  return (
    <div className="py-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex justify-between gap-4">
            <div className="flex justify-center items-center">
              <Octagon width="85px" $backgroundImage={author.image} />
            </div>
            <div className="flex flex-col">
              <p className="text-xl font-bold">{props.name}</p>
              <p className="text-xl pb-3">₩ {props.price.toLocaleString()}</p>
              <p className="text-base text-gray-300">@{props.author.id}</p>
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
