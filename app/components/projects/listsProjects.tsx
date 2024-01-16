import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Iprops {
  params: string;
}

const ListProjects = ({ params }: Iprops) => {
  return (
    <>
      <div className=" min-h-56 border-t-2 border-l-2 rounded-xl border-gray-400 hover:shadow-[6px_6px_0px_0px_rgba(100,100,200)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition ease-in-out shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(195,0,255)] h-fit dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255)]">
        <div className="  px-6 py-6 h-fit flex flex-row gap-4">
          <div className="">
            <a
              href="https://github.com/thapabishal21tech/thapabishal21tech"
              target="_blank"
            >
              <Image
                className="  h-full w-full "
                width={700}
                height={700}
                src={"/project-portfolio.png"}
                alt="project1"
              />
            </a>
          </div>
          <div className=" flex flex-col gap-2">
            <h1 className=" text-2xl font-bold text-pink-600">PORTFOLIO</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptatem odio debitis eum asperiores aliquam, possimus porro.
              Veniam, optio aperiam! Lorem ipsum
            </p>
            <div>
              <Link href={`/projects/${params}`}>
                {" "}
                <button className=" dark:bg-violet-700 dark:hover:bg-violet-900 text-white px-3 py-1 rounded-md font-semibold bg-black dark:text-white hover:bg-slate-800">
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
