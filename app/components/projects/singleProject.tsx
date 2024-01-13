"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Techstack from "../techstack";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";

const Singleproject = () => {
  return (
    <>
      <div className=" dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-black flex justify-center dark:text-white">
        <div className=" w-[780px] my-24 ">
          <div className=" flex flex-row mb-6">
            <Link href="/projects">
              <p className=" cursor-pointer hover:text-slate-800 flex flex-row items-center gap-2 font-bold text-slate-600 ">
                {" "}
                <FaArrowLeft />
                Go Back
              </p>
            </Link>
          </div>
          <div className=" pt-6">
            <div className=" flex flex-row justify-center items-center gap-8">
              <div className="">
                <h1 className="  text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Kanban-Board
                </h1>
              </div>
            </div>
            <div className=" flex flex-row justify-center items-center  gap-10 my-6">
              {" "}
              <Link href="https://github.com/thapabishal21tech/thapabishal21tech">
                <span className=" flex flex-row items-center font-semibold  hover:cursor-pointer  text-lg hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                  portfolio.vercel.app
                  <FiArrowUpRight />
                </span>
              </Link>
              <div>
                <a
                  href="https://github.com/thapabishal21tech/thapabishal21tech"
                  target="_blank"
                >
                  <span className=" flex gap-2 flex-row items-center font-semibold  hover:cursor-pointer  text-lg hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                    <FaGithub />
                    portfolio.github
                    <FiArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className=" flex justify-center">
            <Image
              className="border-2 border-violet-700  rounded-lg mx-4"
              width={700}
              height={700}
              src={"/kanban.png"}
              alt="project1"
            />
          </div>
          <div className=" flex py-6 mx-10 justify-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quae temporibus ullam recusandae, perferendis necessitatibus, amet
              reiciendis totam quidem provident beatae illo commodi ipsa
              repudiandae aspernatur vero sapiente. Dignissimos nemo delectus
              iusto incidunt recusandae inventore vitae repellat. Tenetur,
              voluptatum perspiciatis!
            </p>
          </div>
          <div className=" mx-8 flex flex-row gap-4 ">
            <Techstack
              techName={"TypeScript"}
              techImg={<SiTypescript />}
              borderColor="border-blue-500"
              bgColor="bg-red-200"
              textColor="text-green-500"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleproject;

{
  /* <Techstack
techName={"NextJs"}
techImg={<TbBrandNextjs />}
borderColor="border-red-200"
bgColor="bg-blue-200"
/>

<Techstack
techName={"ReactJs"}
techImg={<RiReactjsFill />}
borderColor="border-blue-400"
bgColor="bg-blue-200"
/>
<Techstack
techName={"ReactJs"}
techImg={<RiReactjsFill />}
borderColor="border-blue-400"
bgColor="bg-blue-200"
/>
<Techstack
techName={"TailwindCSS"}
techImg={<SiTailwindcss />}
borderColor="border-pink-200"
bgColor="bg-blue-200"
/>
<Techstack
techName={"Vercel"}
techImg={<SiVercel />}
borderColor="border-blue-200"
bgColor="bg-blue-200"
/> */
}
