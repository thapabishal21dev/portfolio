import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const ListProject = () => {
  const styles = {
    main: {
      backgroundColor: "#f1f1f1",
      width: "100%",
    },
    inputText: {
      padding: "10px",
      color: "red",
    },
  };
  return (
    <>
      <div className="mx-10 min-h-56 border-t-2 border-l-2 rounded-xl border-gray-400 hover:shadow-[6px_6px_0px_0px_rgba(100,100,200)] hover:translate-x-[-5px] hover:translate-y-[-5px] transition ease-in-out shadow-[6px_6px_0px_0px_rgba(0,0,0)] dark:shadow-[6px_6px_0px_0px_rgba(195,0,255)] h-fit dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255)]">
        <div className="  px-6 py-6 h-fit flex flex-row gap-4">
          <div className="">
            <a
              href="https://github.com/thapabishal21tech/thapabishal21tech"
              target="_blank"
            >
              <Image
                className=" rounded-lg "
                width={700}
                height={700}
                src={"/project-portfolio.png"}
                alt="project1"
              />
            </a>
          </div>
          <div className=" flex flex-col gap-1">
            <h1 className=" text-2xl font-bold text-pink-600">PORTFOLIO</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              voluptatem odio debitis eum asperiores aliquam, possimus porro.
              Veniam, optio aperiam! Lorem ipsum
            </p>
            <div className=" flex flex-row items-center  gap-2 my-2">
              {" "}
              <a
                href="https://github.com/thapabishal21tech/thapabishal21tech"
                target="_blank"
              >
                <span className=" flex flex-row items-center font-semibold  hover:cursor-pointer  text-lg hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                  portfolio.vercel.app
                  <FiArrowUpRight />
                </span>
              </a>
              <div>
                <a
                  href="https://github.com/thapabishal21tech/thapabishal21tech"
                  target="_blank"
                >
                  <span className=" flex gap-2 flex-row items-center font-semibold  hover:cursor-pointer  text-lg hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1 ">
                    <FaGithub />
                    portfolio.github
                    <FiArrowUpRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProject;
