"use client";
// import { ApiDataContext } from "@/app/context/context";
import { useContext } from "react";
import Link from "next/link";

export interface IPropsProjectList {
  params: string | undefined;
  projectData: any;
  projectId: number | undefined;
}

const ListProjects = ({ params, projectData }: IPropsProjectList) => {
  // const { setUserApiData } = useContext(ApiDataContext);

  const handleClick = () => {
    // setUserApiData(params);
  };

  return (
    <>
      <div>
        <Link href={`/projects/${params}`} onClick={handleClick}>
          <div
            className={`cursor-pointer space-y-2 overflow-hidden  border-base-800 border-2 dark:border-slate-600 dark:hover:border-2 dark:hover:bg-gradient-to-br from-base-900 to-base-900/80 ${projectData.projectBorderColor} ${projectData.projectShadowColor} ${projectData.projectBorderColorLight} ${projectData.projectBgColorLight} ${projectData.projectShadowColorLight} bg-slate-100 transition duration-300  flex flex-row items-center w-[370px] h-[100px] dark:bg-slate-950 hover:translate-x-[-5px]  hover:translate-y-[-5px] ease-out px-6 dark:text-slate-400 rounded-xl `}
          >
            {" "}
            <div
              className={`w-[270px] text-transparent text-md bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r ${projectData.projectTitleColor1st} ${projectData.projectTitleColor2nd}`}
            >
              <h1 className=" text-lg font-semibold">
                {projectData.projectTitle}
              </h1>
              <p className=" text-sm truncate">
                {projectData.projectDescription}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListProjects;
