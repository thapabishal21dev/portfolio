import React from "react";
import { TbTextColor } from "react-icons/tb";

interface ITechStackProps {
  techName: string;
  techImg: React.ReactNode;
  borderColor: string;
  bgColor: string;
  textColor: string;
}

const Techstack = (props: ITechStackProps) => {
  const getBorderColor = props.borderColor;
  const getBgColor = props.bgColor;
  const getTextColor = props.textColor;

  return (
    <>
      <div
        id="techstack"
        style={{
          background: `${getBgColor}`,
          borderColor: `${getBorderColor}`,
        }}
        className={`${getTextColor} hover:${getBgColor} ${getBorderColor} w-fit px-2 py-1 rounded-md flex flex-row items-center gap-2 cursor-pointer border-2`}
      >
        <div>
          <p className=" text-xl h-6 text-[#0c121ed9] ">{props.techImg}</p>
        </div>
        <div>{props.techName}</div>
      </div>
    </>
  );
};

export default Techstack;

{
  /* <div
id="techstack"
className={`border-2 w-fit px-2  py-1 rounded-md  flex flex-row items-center dark:text-white gap-2  cursor-pointer dark:hover:bg-slate-900 hover:${getBorderColor} hover:bg-green-100 hover:bg-opacity-800 bg-[#fffff]dark:hover:text-black `}
> */
}

//2nd

{
  /* <div
id="techstack"
className={` flex justify-center items-center cursor-pointer px-3 py-2 gap-2 rounded-md border-2 border-neutral-200 hover:border-${getBorderColor} dark:text-white  dark:hover:bg-opacity-50 dark:hover:bg-blue-300 `}
> */
}

//  dark:hover:bg-slate-900
