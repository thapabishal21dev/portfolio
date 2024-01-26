"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowLeftLight } from "react-icons/pi";
import Techstack from "../techstack";
// import { ApiDataContext } from "@/app/context/context";
import { ProjectsList } from "@/app/lib/data/data";
import { IProject } from "@/app/lib/data/data";
import { useRouter } from "next/navigation";
import { RiCodeSSlashLine, RiLinksLine } from "react-icons/ri";

const SingleProject = () => {
  // const [selectProject, setSelectProject] = useState<IProject>({} as IProject);
  // const { userApiData } = useContext(ApiDataContext);

  // const router = useRouter();

  // useEffect(() => {
  //   const foundProjectId = ProjectsList.find(
  //     (item) => item.projectTitle === userApiData
  //   );
  //   if (foundProjectId) {
  //     setSelectProject(foundProjectId);
  //   } else {
  //     router.push("/projects");
  //     return;
  //   }
  // }, [userApiData, router]);

  return (
    <>
      <div>
        <h1>singleproject</h1>
      </div>

      {/* <div>
        {selectProject && (
          <div className="  dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-950 to-black flex justify-center dark:text-neutral-300 ">
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
                    <h1 className="text-2xl  font-bold bg-gradient-to-br to-slate-500 from-neutral-800 text-transparent bg-clip-text dark:bg-bg-gradient-to-br dark:to-slate-300 dark:from-neutral-500">
                      {selectProject.projectTitle}
                    </h1>
                  </div>
                </div>
                <div className=" flex flex-row  items-center gap-2 my-4">
                  {" "}
                  <a
                    href={`https://${selectProject.projectLink}`}
                    target="_blank"
                  >
                    <span className=" flex text-md text-slate-600 gap-1 flex-row items-center truncate hover:text-violet-800 hover:cursor-pointer dark:hover:text-violet-500 dark:text-slate-500">
                      <RiLinksLine />
                      Live demo
                    </span>
                  </a>
                  <div>
                    <a
                      href={`https://github.com/thapabishal21tech${selectProject.projectGithub}`}
                      target="_blank"
                    >
                      <span className=" flex text-md text-slate-600 gap-1 flex-row items-center truncate hover:text-violet-800 hover:cursor-pointer dark:hover:text-violet-500 dark:text-slate-500">
                        <RiCodeSSlashLine />
                        Source code{" "}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* bg-[url('/wallpaper.png')]  */}
      {/* <div>
                <div className=" flex justify-center">
                  <div className=" dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 bg-gradient-to-r from-slate-200 to-slate-400 rounded px-20 py-16">
                    <Image
                      className="border-2 rounded-xl border-gray-200"
                      width={1000}
                      height={1000}
                      src={selectProject.projectImg ?? "/wallpaper.png"}
                      alt={selectProject.projectDescription || "ProjectImg"}
                      priority
                    />
                  </div>
                </div>
                <div className=" text-justify flex py-6">
                  <p>{selectProject.projectDescription}</p>
                </div>{" "}
                <div className="  flex flex-row flex-wrap gap-4 ">
                  {selectProject.projectTechStack?.map((newItem, index) => (
                    <div key={index}>
                      <Techstack
                        techName={newItem.techName}
                        techImg={newItem.techImg}
                        hoverBgColor={newItem.hoverBgColor}
                        HoverBorderColor={newItem.HoverBorderColor}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div> */}
    </>
  );
};

export default SingleProject;
