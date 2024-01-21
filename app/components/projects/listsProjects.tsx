"use client";
import { ApiDataContext } from "@/app/context/context";
import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
interface IParams {
  params?: string;
  projectTitle?: string;
  projectDescription?: string;
  productId?: number | undefined;
}

const ListProjects = ({
  params,
  projectTitle,
  projectDescription,
  productId,
}: IParams) => {
  const { setUserApiData } = useContext(ApiDataContext);

  const handleClick = () => {
    setUserApiData(productId);
  };

  return (
    <>
      <div className=" min-h-56 border-t-2 border-l-2 rounded-md border-gray-400 hover:shadow-[6px_6px_0px_0px_rgba(100,100,200)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition ease-in-out shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(195,0,255)] h-fit dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255)]">
        <div className=" px-6 py-8 h-fit flex flex-row gap-4">
          <div className="">
            <a
              href="https://github.com/thapabishal21tech/thapabishal21tech"
              target="_blank"
            >
              <Image
                className="  h-40 w-full  "
                width={700}
                height={700}
                src={"/project-portfolio.png"}
                alt="project1"
              />
            </a>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" text-2xl font-bold text-pink-600">
              {projectTitle}
            </h1>
            <p className=" text-sm">{projectDescription}</p>
            <div>
              <Link href={`/projects/${params}`}>
                {" "}
                <button
                  onClick={handleClick}
                  className=" dark:bg-violet-700 dark:hover:bg-violet-900 text-white px-3 py-1 rounded-md font-bold bg-black dark:text-white hover:bg-slate-800"
                >
                  visit project
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProjects;
