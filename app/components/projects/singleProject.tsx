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
interface ISelectProjectList {
  productId?: number | undefined;
  projectImg: any;
  projectTitle?: string;
  projectDescription?: string;
  projectLink?: string;
  projectGithub?: string;
}

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

  console.log(selectProject);

  return (
    <>
      {selectProject && (
        <div className=" dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-black flex justify-center dark:text-white ">
          <div className=" w-[780px] my-24 dark:text-slate-400 ">
            <Link href="/projects">
              <div className=" dark:bg-slate-800  hover:bg-slate-900 px-3 py-1 w-fit flex flex-row rounded-2xl border-2 border-slate-500 items-center gap-2 mt-6">
                <p className=" text-slate-100 ">
                  <PiArrowLeftLight />
                </p>
                <p className=" text-sm bg-gradient-to-r from-green-600 to-green-500 hover:bg-gradient-to-r hover:from-green-400  hover:to-green-400 inline-block text-transparent bg-clip-text">
                  Back to Project
                </p>
              </div>
            </Link>

            <div className=" pt-6">
              <div className=" flex flex-row justify-start items-center gap-8">
                <div className="">
                  {/* <h1 className="  text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"> */}
                  <h1 className="text-2xl font-bold bg-gradient-to-br from-slate-100 to-neutral-700 text-transparent bg-clip-text">
                    {selectProject.projectTitle}
                  </h1>
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
            {/* bg-gradient-to-b from-blue-600 to-violet-600 */}
            <div className=" bg-[url('/wallpaper.png')] flex justify-center  rounded-xl h-[380px]">
              <Image
                className=" border-2 border-neutral-500 rounded-xl m-12 w-fit"
                width={1000}
                height={1000}
                src={selectProject.projectImg}
                alt="project1"
              />
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
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProject;
