"use client";
import React from "react";
import Techstack from "../techstack";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";

const HomePageAbout = () => {
  return (
    <div className=" flex justify-center w-screen pt-10 dark:bg-slate-950 text-black dark:text-white">
      <div className=" w-[780px] ">
        <div>
          <h1 className="text-xl py-5 bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-bold">
            Skills
          </h1>
        </div>
        <div className="  flex flex-row flex-wrap gap-4 py-4 ">
          <Techstack
            techName={"TypeScript"}
            techImg={<SiTypescript />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"ReactJs"}
            techImg={<RiReactjsFill />}
            HoverBorderColor="hover:border-cyan-400"
            hoverBgColor="hover:bg-cyan-200"
          />
          <Techstack
            techName={"NextJs"}
            techImg={<TbBrandNextjs />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"TailwindCSS"}
            techImg={<SiTailwindcss />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"JavaScript"}
            techImg={<SiJavascript />}
            HoverBorderColor="hover:border-[#F0DB4F]"
            hoverBgColor="hover:bg-[#F0DB4F]"
          />
          <Techstack
            techName={"Redux"}
            techImg={<SiRedux />}
            HoverBorderColor="hover:border-[#764abc]"
            hoverBgColor="hover:bg-[#764abc]"
          />
          <Techstack
            techName={"Sass"}
            techImg={<SiSass />}
            HoverBorderColor="hover:border-[#cc6699]"
            hoverBgColor="hover:bg-[#cc6699]"
          />
          <Techstack
            techName={"GitHub"}
            techImg={<SiGithub />}
            HoverBorderColor="hover:border-slate-400"
            hoverBgColor="hover:bg-slate-100"
          />{" "}
          <Techstack
            techName={"Figma"}
            techImg={<SiFigma />}
            HoverBorderColor="hover:border-violet-400"
            hoverBgColor="hover:bg-violet-200"
          />
          <Techstack
            techName={"Git"}
            techImg={<SiGit />}
            HoverBorderColor="hover:border-[#f14e32]"
            hoverBgColor="hover:bg-[#f14e32]"
          />
        </div>
        <div className=" py-5">
          <h1 className="text-xl py-5 bg-gradient-to-r from-pink-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">
            Experience
          </h1>
          <div className=" flex flex-col">
            <div className=" flex flex-row gap-10 py-10">
              <div className=" flex flex-row gap-10 min-w-[300px] ">
                <h1 className=" text-lg text-blue-400 ">
                  october 2023 - present
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-blue-400 ">
                  Junior React Developer
                </h1>
                <p className=" text-sm font-semibold ">Freelancher</p>
                <p className=" text-sm">worked in different web application</p>
              </div>
            </div>
            <div className=" flex flex-row  gap-10 py-10">
              <div className=" flex flex-row gap-10 min-w-[300px] ">
                <h1 className=" text-lg text-blue-400 ">
                  June 2023 - September 2023
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-blue-500 ">React Intern</h1>
                <p className=" text-sm font-semibold ">LancemeUp</p>
                <p className=" text-sm">worked in different web application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAbout;
