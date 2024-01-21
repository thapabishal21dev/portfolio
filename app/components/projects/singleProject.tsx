"use client";
import React, { useContext, useEffect, useState } from "react";
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
import { ApiDataContext } from "@/app/context/context";
import { ProjectsList } from "@/app/lib/data/data";
interface ISelectProjectList {
  productId?: number | undefined;
  projectImg: string;
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
        <div className=" dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-black flex justify-center dark:text-white">
          <div className=" w-[780px] my-24 ">
            <Link href="/projects">
              <div className=" flex flex-row items-center gap-2 mb-6">
                <p className=" text-slate-500">
                  <FaArrowLeft />
                </p>
                <p className=" text-md font-bold bg-gradient-to-r from-green-700 to-green-600 hover:bg-gradient-to-r hover:from-green-400  hover:to-green-400  inline-block text-transparent bg-clip-text">
                  Go Back
                </p>
              </div>
            </Link>

            <div className=" pt-6">
              <div className=" flex flex-row justify-center items-center gap-8">
                <div className="">
                  <h1 className="  text-3xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    {selectProject.projectTitle}
                  </h1>
                </div>
              </div>
              <div className=" flex flex-row justify-center items-center  gap-10 my-6">
                {" "}
                <a
                  href={`https://${selectProject.projectLink}`}
                  target="_blank"
                >
                  <span className=" flex flex-row items-center  hover:cursor-pointer  text-md hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                    <a href={selectProject.projectLink} target="_blank" />{" "}
                    {selectProject.projectLink}
                    <FiArrowUpRight />
                  </span>
                </a>
                <div>
                  <a
                    href={`https://${selectProject.projectGithub}`}
                    target="_blank"
                  >
                    <span className=" flex gap-2 flex-row items-center  hover:cursor-pointer  text-md hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                      <FaGithub />
                      thapabishal21tech/{selectProject.projectTitle}
                      <FiArrowUpRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className=" flex justify-center px-18">
              <Image
                className="border-2 border-neutral-500  rounded-lg mx-4"
                width={700}
                height={700}
                src={"/screenshot.png"}
                alt="project1"
              />
            </div>
            <div className=" text-justify flex py-6 mx-10 justify-center">
              <p>{selectProject.projectDescription}</p>
            </div>
            <div className="  flex flex-row gap-4 mx-10 ">
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
