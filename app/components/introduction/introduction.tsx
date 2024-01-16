"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Introduction = () => {
  return (
    <>
      <div className=" relative text-black dark:text-white  z-10 flex justify-center ">
        <div className=" mt-20 w-[780px] ">
          <div className="flex flex-col justify-between  ">
            <div className=" flex flex-row mt-12 justify-between">
              <div className=" flex flex-col">
                <div>
                  <h1 className=" text-5xl bg-gradient-to-r from-[#777777] to-[#003cff]  inline-block text-transparent bg-clip-text font-extrabold ">
                    BISHAL THAPA
                  </h1>
                </div>
                <div className="">
                  <h1 className="dark:text mt-2 from-[#00ffee] to-[#001eff] text-3xl font-bold text-slate-700">
                    <span className="bg-clip-text dark:text-transparent bg-gradient-to-r from-[#00ffee] to-[#001eff]">
                      Frontend Software Developer
                    </span>{" "}
                  </h1>{" "}
                  <div className=" flex flex-row items-center text-2xl text-neutral-700 font-bold dark:text-white">
                    <span>Kathmandu, Nepal</span>
                    <Image
                      className="rounded-full w-8"
                      src="/nepalflag.svg"
                      width={200}
                      height={200}
                      alt="avatar"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className=" flex  ">
                <Image
                  className=" rounded-[50%] h-[150px] w-[150px] shadow-[rgba(0,_0,_0,_0.5)_0px_10px_10px]"
                  src="/portfolio.jpg"
                  width={200}
                  height={200}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex dark:text-white flex-col  font-medium text-[16px] text-black mt-4">
              <p className=" w-[520px]">
                Motivated Junior React Developer with expertise in HTML, CSS,
                JavaScript (ES6), and ReactJS. Dedicated to delivering
                high-quality, responsive user interfaces and enhancing
                functionality through API integration. A collaborative team
                player with a passion for innovative projects and a commitment
                to continuous skill enhancement in software development.
              </p>
            </div>
            <div className=" flex flex-row gap-4 my-4 items-center">
              <Link href="/about">
                {" "}
                <button className=" flex flex-row gap-2 items-center bg-[#1d50a3] rounded-lg text-white px-2 py-2 hover:bg-blue-700 text-md ">
                  <span className=" text-xl ">
                    <IoPersonSharp />
                  </span>
                  More about me
                </button>
              </Link>
              <div>
                <div className=" flex justify-center gap-6 flex-row items-center">
                  <a
                    href="https://github.com/thapabishal21tech"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className=" text-[24px] dark:text-white">
                      <FaGithub />
                    </p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="  text-[24px] dark:text-white">
                      <FaLinkedin />
                    </p>
                  </a>

                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="  text-[24px] dark:text-white">
                      <FaXTwitter />
                    </p>
                  </a>
                  <a
                    href="mailto:thapabishal21sinha@gmail.com"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className=" text-[24px] dark:text-white">
                      <MdEmail />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;

{
  /* <div className="absolute w-full h-screen">
<BackgroundGradient />
</div>


// import BackgroundGradient from "@/app/background";


------------------

<div className="relative  dark:bg-black h-screen transition-all duration-500 ease-out delay-0 ">
      <div className=" flex justify-center">
        <div className="relative w-4/6 flex z-50 justify-center border-blur max-h-screen py-28">
          
        </div>
      </div>
    </div>


-----------------------------

*/
}
