import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiVercel } from "react-icons/si";
const Footer = () => {
  let currentYear = new Date();

  return (
    <>
      {" "}
      <div className=" bg-centre bg-[url('/wallpaper.png')] ">
        <div className="flex dark:bg-[#0e1732] justify-center text-white">
          <div className=" w-full max-w-[780px] mx-auto my-4 flex flex-col">
            <div className=" flex flex-row justify-between mt-10">
              <div>
                <h1 className=" dark:text-neutral-400 font-bold text-sm my-5">
                  PAGES
                </h1>
                <ul className="flex flex-col text-[1rem] gap-4 ">
                  <li>
                    <Link
                      className=" dark:text-white dark:hover:text-slate-300"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" dark:text-white dark:hover:text-slate-300"
                      href="/"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" dark:text-white dark:hover:text-slate-300"
                      href="/"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      className=" dark:text-white dark:hover:text-slate-300"
                      href="/"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className=" dark:text-neutral-400 font-bold text-sm my-5">
                  SOCIAL
                </h1>
                <ul className="flex flex-col gap-4 dark:text-white ">
                  <a
                    className=" hover:text-slate-300 flex flex-row items-center gap-2"
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                  >
                    {" "}
                    <FaGithub />
                    GitHub
                  </a>
                  <a
                    className=" hover:text-slate-300 flex flex-row items-center gap-2"
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                  >
                    {" "}
                    <FaLinkedin />
                    LinkedIn
                  </a>
                  <a
                    className=" hover:text-slate-300 flex flex-row items-center gap-2"
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                  >
                    {" "}
                    <FaXTwitter />
                    Twitter
                  </a>
                  <a
                    className=" hover:text-slate-300 flex flex-row items-center gap-2"
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                  >
                    {" "}
                    <MdEmail />
                    Email
                  </a>
                </ul>
              </div>
              <div>
                <h1 className=" dark:text-neutral-400 text-sm font-bold my-2">
                  SUPPORT MY WORK
                </h1>
                <ul className="dark:text-white gap-2">
                  <li>
                    <button>Buy me a coffee</button>
                  </li>
                  <li>
                    <button>Paypal</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center border-t mt-10 border-slate-300 dark:border-slate-700  ">
              <div className=" flex flex-col justify-center items-center my-4 ">
                <div className=" flex items-center justify-center gap-4">
                  <span className="  font-bold text-sm font-mono dark:text-slate-500">
                    MADE WITH
                  </span>
                  <div className=" flex flex-row items-center gap-2">
                    <a href="https://react.dev/">
                      <i
                        style={{ fontSize: "28px" }}
                        className="devicon-react-original colored"
                      ></i>{" "}
                    </a>
                    <a href="https://nextjs.org/">
                      <i
                        style={{ fontSize: "38px" }}
                        className=" dark:text-white devicon-nextjs-plain-wordmark"
                      ></i>{" "}
                    </a>
                    <a href="https://tailwindcss.com/">
                      <i
                        style={{ fontSize: "28px" }}
                        className="devicon-tailwindcss-plain colored"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <h1 className=" dark:text-slate-500 text-sm font-bold font-mono text-center">
                    Made by{" "}
                    <span className="font-extrabold text-transparent text-md bg-clip-text bg-gradient-to-r from-white to-pink-600 dark:bg-gradient-to-r dark:from-pink-600 dark:to-purple-600">
                      {" "}
                      BISHAL THAPA.
                    </span>{" "}
                    All rights reserved.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// with 💙.
