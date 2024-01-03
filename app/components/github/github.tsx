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
    <div className=" flex justify-center ">
      <div className=" w-4/5 my-12 h-auto py-12 ">
        <h1 className=" text-center font-bold text-gray-600 text-5xl ">
          Github Contributions
        </h1>{" "}
        <div className=" mx-16 flex justify-center my-6 flex-row gap-4 ">
          <button
            onClick={() => handleChangeYear(2022)}
            className=" hover:text-slate-600"
          >
            2022
          </button>
          <button
            onClick={() => handleChangeYear(2023)}
            className=" hover:text-slate-600"
          >
            2023
          </button>
          <button
            onClick={() => handleChangeYear(2024)}
            className=" hover:text-slate-600"
          >
            2024
          </button>
        </div>
        <div className=" border-slate-400 py-4 bg-slate-100 rounded-md border-2 mx-2 ">
          {isClient && (
            <GitHubCalendar
              maxLevel={4}
              style={{ margin: "10px auto " }}
              username="thapabishal21tech"
              blockSize={14}
              blockMargin={5}
              fontSize={16}
              colorScheme="dark"
              year={selectedYear}
            />
          )}
        </div>
        <h1 className="my-6 text-lg italic underline cursor-pointer text-center text-green-500">
          <Link href="https://github.com/thapabishal21tech" target="_blank">
            thapabishal21tech on Github - {thisYear.getFullYear()}
          </Link>
        </h1>
        <h1 className=" text-center ">
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
