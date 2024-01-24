"use client";
import React from "react";
import ListProjects from "./listsProjects";
import { ProjectsList } from "@/app/lib/data/data";

const ProjectsListsPage: React.FC = () => {
  return (
    <>
      <div className="pt-16 transition-opacity ease-in-out duration-600 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black flex justify-center ">
        <div className=" flex flex-col w-[780px]">
          <h1 className="text-2xl font-bold bg-gradient-to-br to-slate-300 from-slate-600 text-transparent bg-clip-text dark:bg-bg-gradient-to-br dark:to-slate-950 dark:from-slate-100 pt-12 pb-6 ">
            Projects
          </h1>
          <div className="flex flex-row flex-wrap gap-10  list-none ">
            {ProjectsList.map((item, index) => (
              <li key={index}>
                <ListProjects
                  params={item.projectTitle}
                  projectData={item}
                  projectId={item.projectId}
                />
              </li>
            ))}
            <div className=" text-md hover:cursor-pointer flex items-center mx-auto my-8">
              <a
                className=" dark:text-white hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1"
                href="https://github.com/thapabishal21tech"
                target="_blank"
              >
                View more on Github &#10132;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsListsPage;
