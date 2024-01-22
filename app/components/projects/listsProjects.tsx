"use client";
import { ApiDataContext } from "@/app/context/context";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
interface IParams {
  params?: string;
  projectTitle?: string;
  projectDescription?: string;
  productId?: number | undefined;
  projectImg: any;
  projectBorderColor?: string;
  projectShadowColor?: string;
  projectBorderColorLight?: string;
  projectBgColorLight?: string;
  projectShadowColorLight?: string;
}

const ListProjects = ({
  params,
  projectTitle,
  projectDescription,
  productId,
  projectImg,
  projectBorderColor,
  projectShadowColor,
  projectBorderColorLight,
  projectBgColorLight,
  projectShadowColorLight,
}: IParams) => {
  const { setUserApiData } = useContext(ApiDataContext);

  const handleClick = () => {
    setUserApiData(productId);
  };

  return (
    <>
      <div>
        <Link href={`/projects/${params}`}>
          <div
            onClick={handleClick}
            className={`cursor-pointer space-y-2 overflow-hidden  border-base-800 border-2 dark:border-slate-600 dark:hover:border-2 dark:hover:bg-gradient-to-br from-base-900 to-base-900/80 ${projectBorderColor} ${projectShadowColor} ${projectBorderColorLight} ${projectBgColorLight} ${projectShadowColorLight} bg-slate-100 transition duration-300  flex flex-row items-center w-[370px] h-[100px] dark:bg-slate-950 rounded-xl hover:translate-x-[-5px]  hover:translate-y-[-5px] ease-out px-6 dark:text-slate-400  `}
          >
            {" "}
            <div className=" w-[270px] text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
              <h1 className=" text-lg font-semibold">{projectTitle}</h1>
              <p className=" text-sm truncate">{projectDescription}</p>
            </div>
          </div>
        </Link>
      </div>
      {/*
      <div className=" min-h-56 border-t-2 border-l-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md border-gray-400 hover:shadow-[6px_6px_0px_0px_rgba(100,100,200)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition ease-in-out shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(100,100,200)] h-fit dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255)]">
        <div className=" px-6 py-6 h-fit flex flex-row gap-4">
           <div className="">
            <a
              href="https://github.com/thapabishal21tech/thapabishal21tech"
              target="_blank"
            >
             
            </a>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" text-2xl font-bold  text-violet-500">
              {projectTitle}
            </h1>
            <p className=" text-sm">{projectDescription}</p>
            <div>
              <Link href={`/projects/${params}`}>
                {" "}
                <button
                  onClick={handleClick}
                  className=" dark:bg-violet-700 dark:hover:bg-violet-900 text-white px-3 py-1 rounded-[5px] font-semibold text-md bg-black dark:text-white hover:bg-slate-800"
                >
                  Visit Project
                </button>
              </Link>
            </div>
          </div> 
         
        </div>
      </div>
      */}
    </>
  );
};

export default ListProjects;
