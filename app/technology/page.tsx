import Image from "next/image";
import React from "react";

const Technology = () => {
  return <div className="flex justify-center my-6 ">
    <div className=" w-3/5">
    <div>
    <h1 className="font-extrabold text-center text-transparent text-3xl bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500"
>
  Tech Stack
</h1>
</div>
    <div className=" flex gap-20 ">
      <div className=" bg-slate-400 rounded-md p-4 text-center  flex-col justify-center">
      <Image
              className=" rounded-full w-14"
              src="/reactjs.svg"
              width={200}
              height={200}
              alt="avatar"
            />
      <p className=" font-bold text-md ">ReactJS</p>
        </div>
        
    </div>
    </div>
  </div>;
};

export default Technology;
