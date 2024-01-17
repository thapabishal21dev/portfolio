import React from "react";
import { useState, useEffect } from "react";

const Card = () => {
  const [dark, setDark] = useState();
  return (
    <div>
      <div className=" dark mx-5 my-10 px-4 py-4 h-[180px] bg-white w-[350px] dark:bg-slate-950">
        <h1 className=" text-xl font-bold ">This is Title</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos numquam
          amet asperiores.
        </p>
        <button className="my-2 bg-slate-500 text-white py-1 hover:bg-blue-500 px-3 rounded-sm text-[18px]">
          Toggle
        </button>
      </div>
    </div>
  );
};

export default Card;
