"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface INavbarElement {
  classList: {
    toggle: (className: string, force?: boolean) => void;
  };
}

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(true);

  const toggleDarkMode = () => {
    setIsClicked(!isClicked);

    if (!isClicked) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const navbar: INavbarElement | null = document.getElementById("navbar");

      if (navbar) {
        const isScrolled: boolean = window.scrollY > 500;
        navbar.classList.toggle("translate-y-[-100%]", isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="navbar" className=" flex  justify-center w-screen ">
        <nav className=" fixed border-2 border-slate-200 dark:border-slate-700 top-2 mt-2 z-50  w-[780px] rounded-xl bg-[#e3edfe] dark:bg-slate-800  h-14 backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50">
          <ul className=" text-[16px] text-black gap-8 dark:text-slate-300 flex font-medium items-center">
            <li className=" text-xl rounded-xl p-2">
              <Link href="/">
                <Image
                  className="rounded-full w-10"
                  src="/avatar.png"
                  width={200}
                  height={200}
                  alt="avatar"
                />
              </Link>
            </li>
            <li className=" hover:text-slate-600 dark:hover:text-slate-400 p-2">
              <Link href="/about">About</Link>
            </li>
            <li className=" hover:text-slate-600 dark:hover:text-slate-400 p-2">
              <Link href="/projects">Projects</Link>
            </li>
            <li className=" hover:text-slate-600 dark:hover:text-slate-400  p-2">
              <Link href="/technology">Technology</Link>
            </li>
            <li className=" hover:text-slate-600 dark:hover:text-slate-400 p-2">
              <Link href="/blog">Blog</Link>
            </li>
            <button
              className="  bg-slate-800 mx-4 w-30 bg-opacity-20 rounded-lg px-[10px] py-[6px] hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-500 ease-out delay-0 focus:outline-none  focus:ring focus:ring-blue-400 "
              onClick={toggleDarkMode}
            >
              {isClicked ? (
                <div className="text-white gap-2 items-center flex flex-row text-[18px]">
                  <FaSun />
                  <span className=" text-[14px] text-white gap-4 items-center flex flex-row ">
                    Light Mode
                  </span>
                </div>
              ) : (
                <div className="text-black text-[14px] gap-2 items-center flex flex-row  ">
                  <FaMoon />
                  <span>Dark Mode</span>
                </div>
              )}
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

// <nav className=" fixed top-2 mt-2 z-50  w-[780px] bg-slate-400 h-14 backdrop-blur-[6px] dark:backdrop-blur-[6px]  dark:bg-opacity-90 border-1 bg-opacity-40  transition-all duration-500 ease-out delay-0">
//           <ul className=" text-[16px]  text-black gap-8  dark:text-slate-500 dark:bg-gray-800 min-[640px]:flex font-medium items-center"></ul>
