"use client";
import React from "react";
import Image from "next/image";
import BackgroundGradient from "@/app/background";

const Introduction = () => {
  return (
    <div className="relative z-10 dark:bg-black h-screen transition-all duration-500 ease-out delay-0 ">
      <div className="absolute w-full h-screen">
        <BackgroundGradient />
      </div>
      <div className=" flex justify-center">
        <div className="relative w-4/6 flex z-50 justify-center border-blur max-h-screen py-28">
          <div className="flex flex-row">
            <div className="">
              <div className="flex flex-col mt-5 gap-12">
                <h1 className=" dark:bg-gradient-to-r from-[#00ffee] to-[#001eff] text-7xl bg-gradient-to-r from-[#777777] to-[#003cff]  inline-block text-transparent bg-clip-text font-extrabold ">
                  BISHAL THAPA
                </h1>
                <div className="flex flex-row items-center">
                  <p className="dark:text from-[#00ffee] to-[#001eff] text-5xl font-bold text-slate-700">
                    <span className="bg-clip-text dark:text-transparent bg-gradient-to-r from-[#00ffee] to-[#001eff]">
                      Frontend Software Developer
                    </span>
                    <span className="flex my-4 flex-row dark:bg-clip-text text-transparent bg-gradient-to-r from-[#00ffee] to-[#001eff]">
                      Kathmandu, Nepal apply
                      <Image
                        className="rounded-full w-12"
                        src="/nepalflag.svg"
                        width={200}
                        height={200}
                        alt="avatar"
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex dark:text-white flex-col font-medium text-[16px] text-black mt-10">
                <p>
                  Motivated Junior React Developer with expertise in HTML, CSS,
                  JavaScript (ES6), and ReactJS. Dedicated to delivering
                  high-quality, responsive user interfaces and enhancing
                  functionality through API integration. A collaborative team
                  player with a passion for innovative projects and a commitment
                  to continuous skill enhancement in software development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
