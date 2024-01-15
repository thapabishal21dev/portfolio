"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const thisYear = new Date();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [selectedYear, setSelectedYear] = useState<number>();

  const handleChangeYear = (year: number) => {
    setSelectedYear(year);
  };

  const colorfulTheme = {
    background: "transparent",
    text: "#333",
    light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
    dark: ["#383838", "#4D455D", "#7DB9B6", "#F5E9CF", "#E96479"],
  };

  return (
    <div className=" flex justify-center dark:text-white ">
      <div className=" w-[780px] my-12  ">
        <h1 className=" text-center font-semibold text-2xl ">
          Github Contributions
        </h1>{" "}
        <div className=" mx-16 flex justify-center my-6 flex-row gap-4 ">
          <button
            onClick={() => handleChangeYear(2022)}
            className=" hover:text-green-500 focus:outline-none focus:border-b-2 focus:border-green-300"
          >
            2022
          </button>
          <button
            onClick={() => handleChangeYear(2023)}
            className=" hover:text-green-500 focus:outline-none focus:border-b-2 focus:border-green-300"
          >
            2023
          </button>
          <button
            onClick={() => handleChangeYear(2024)}
            className=" hover:text-green-500 focus:outline-none focus:border-b-2 focus:border-green-300"
          >
            2024
          </button>
        </div>
        <div className=" border-slate-400 py-4 px-5  rounded-md border-2 mx-2 ">
          {isClient && (
            <GitHubCalendar
              style={{ margin: "6px auto " }}
              username="thapabishal21tech"
              blockSize={10}
              blockMargin={3}
              fontSize={14}
              colorScheme="dark"
              year={selectedYear}
            />
          )}
        </div>
        <h1 className="my-6 text-md italic  underline cursor-pointer text-center text-green-500">
          <Link href="https://github.com/thapabishal21tech" target="_blank">
            thapabishal21tech on Github - {thisYear.getFullYear()}
          </Link>
        </h1>
        <h1 className=" text-center text-md ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quos
          tempore perspiciatis aperiam amet nobis iure possimus eligendi
          expedita doloribus Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum deserunt ab rem? Fuga maxime repellendus facilis odit
          doloribus, alias eum!
        </h1>
      </div>
    </div>
  );
};

export default Github;

//              year={parseFloat(selectedyear)}
