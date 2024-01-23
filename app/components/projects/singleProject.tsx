"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowLeftLight } from "react-icons/pi";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Techstack from "../techstack";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { ApiDataContext } from "@/app/context/context";
import { ProjectsList } from "@/app/lib/data/data";
import { motion, Variants } from "framer-motion";

interface ISelectProjectList {
  productId?: number | undefined;
  projectImg?: any;
  projectTitle?: string;
  projectDescription?: string;
  projectLink?: string;
  projectGithub?: string;
  projectBorderColor?: string;
  projectShadowColor?: string;
  projectBorderColorLight?: string;
  projectBgColorLight?: string;
  projectShadowColorLight?: string;
}

const fadeInUpAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const SingleProject = () => {
  const [selectProject, setSelectProject] = useState<ISelectProjectList>(
    {} as ISelectProjectList
  );
  const { userApiData } = useContext(ApiDataContext);

  useEffect(() => {
    const foundProjectId = ProjectsList.find(
      (item) => item.projectId === userApiData
    );
    if (foundProjectId) {
      setSelectProject(foundProjectId);
    }
  }, [userApiData]);

  return (
    <>
      <div>
        {selectProject && (
          <div className=" dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950 to-black flex justify-center dark:text-neutral-300 ">
            <div className=" w-[780px] my-24  ">
              <Link href="/projects">
                <button className=" text-sm flex flex-row items-center gap-1 border-2 dark:border-slate-800 border-neutral-300  hover:bg-neutral-100 dark:hover:bg-gray-800 rounded-2xl px-3 py-1">
                  <PiArrowLeftLight />
                  Back to project
                </button>
              </Link>

              <div className=" pt-6">
                <div className=" flex flex-row justify-start items-center gap-8">
                  <div className="">
                    <motion.h1
                      initial="hidden"
                      animate="show"
                      variants={fadeInUpAnimation}
                      className="text-2xl  font-bold bg-gradient-to-br to-slate-500 from-neutral-800 text-transparent bg-clip-text dark:bg-bg-gradient-to-br dark:to-slate-100 dark:from-neutral-700"
                    >
                      {selectProject.projectTitle}
                    </motion.h1>
                  </div>
                </div>
                <div className=" flex flex-row  items-center gap-6 my-4">
                  {" "}
                  <a
                    href={`https://${selectProject.projectLink}`}
                    target="_blank"
                  >
                    <span className=" flex flex-row items-center truncate  hover:cursor-pointer  text-md hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                      Live Demo
                      <FiArrowUpRight />
                    </span>
                  </a>
                  <div>
                    <a
                      href={`https://github.com/thapabishal21tech${selectProject.projectGithub}`}
                      target="_blank"
                    >
                      <span className=" flex gap-2 flex-row items-center truncate  hover:cursor-pointer  text-md hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                        <FaGithub />
                        &lt;/&gt; Source Code
                        <FiArrowUpRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* bg-[url('/wallpaper.png')]  */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={fadeInUpAnimation}
                className=""
              >
                <div
                  className=" flex justify-center rounded-xl h-[380px] pattern-dots pattern-gray-500 pattern-bg-white 
                pattern-size-2 pattern-opacity-100 dark:border-slate-300 border-2 "
                >
                  {selectProject ? (
                    <Image
                      className=" border-2 rounded-xl w-fit mx-12 my-12"
                      width={1000}
                      height={1000}
                      src={selectProject.projectImg}
                      alt={`${selectProject.projectTitle}`}
                    />
                  ) : (
                    <div className=" m-auto">
                      <p className=" text-xl ">Image Loading...</p>
                    </div>
                  )}
                </div>
                <div className=" text-justify flex py-6">
                  <p>{selectProject.projectDescription}</p>
                </div>
                <div className="  flex flex-row gap-4 ">
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
                    HoverBorderColor="hover:border-green-400"
                    hoverBgColor="hover:bg-green-200"
                  />
                  <Techstack
                    techName={"Vercel"}
                    techImg={<SiVercel />}
                    HoverBorderColor="hover:border-neutral-400"
                    hoverBgColor="hover:bg-neutral-200"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SingleProject;
