import React from "react";
import { TbTextColor } from "react-icons/tb";

interface ITechStackProps {
  techName: string;
  techImg: React.ReactNode;
  HoverBorderColor: string;
  hoverBgColor: string;
}

const Techstack = (props: ITechStackProps) => {
  const getTechName = props.techName;
  const getTechImg = props.techImg;
  const getBorderColor = props.HoverBorderColor;
  const getBgColor = props.hoverBgColor;

  return (
    <>
      <div
        id="techstack"
        className={` w-fit px-3 py-1 rounded-md flex flex-row items-center gap-2 cursor-pointer border-2 ${getBorderColor} ${getBgColor} hover:bg-opacity-60 dark:bg-opacity-40  `}
      >
        <div>
          <p className=" text-md text-neutral-800 dark:text-white ">
            {getTechImg}
          </p>
        </div>
        <div>
          <p className="text-sm">{getTechName}</p>
        </div>
      </div>
    </>
  );
};

export default Techstack;
