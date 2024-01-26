"use client";
import React from "react";

interface ITechStackProps {
  techName?: string;
  techImg?: any;
  HoverBorderColor?: string;
  hoverBgColor?: string;
}

const Techstack = (props: ITechStackProps) => {
  const getTechName = props.techName;
  const getTechImg = props.techImg;
  const getBorderColor = props.HoverBorderColor;
  const getBgColor = props.hoverBgColor;

  return (
    <>
      <div
        className={` w-fit px-3 py-1 rounded-md flex flex-row  items-center gap-2 cursor-pointer border-1 ${getBorderColor} ${getBgColor} hover:bg-opacity-60 dark:bg-opacity-40 min-h-9  border-[1px] border-slate-500`}
      >
        <div>
          <p className=" text-[18px] text-slate-700 dark:text-neutral-300 ">
            {getTechImg}
          </p>
        </div>
        <div>
          <p className="text-sm text-slate-700 dark:text-neutral-300  font-medium ">
            {getTechName}
          </p>
        </div>
      </div>
    </>
  );
};

export default Techstack;
