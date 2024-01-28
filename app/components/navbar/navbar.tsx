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
      <div id="navbar" className="  sm:hidden md:hidden flex justify-center  ">
        <nav className=" fixed border-2 border-slate-200 dark:border-slate-700 top-4 mt-2 z-50  w-[780px] md:w-fit rounded-xl bg-[#e3edfe] dark:bg-slate-950  h-14 backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50">
          <ul className="text-[16px] flex-row gap-8 dark:text-slate-300 flex font-medium items-center">
            <li className=" text-xl rounded-xl p-2">
              <Link href="/">
                <Image
                  className="w-8 mx-1 hover:text-blue-500 hover:scale-75 transition ease-in-out"
                  src="/astronaut.png"
                  width={400}
                  height={400}
                  alt="avatar"
                  property="priority"
                />
              </Link>
            </li>
            <li className=" dark:hover:text-cyan-600 hover:text-cyan-500 hover:underline hover:underline-offset-2  p-2">
              <Link href="/about">About</Link>
            </li>
            <li className=" hover:text-blue-600 hover:underline hover:underline-offset-2 dark:hover:blue-slate-600 p-2">
              <Link href="/projects">Projects</Link>
            </li>
            <li className=" hover:text-pink-600 hover:underline hover:underline-offset-2 dark:hover:text-pink-600  p-2">
              <Link href="/technology">Technology</Link>
            </li>
            <li className=" hover:text-violet-600 hover:underline hover:underline-offset-2 dark:hover:text-voilet-600 p-2">
              <Link href="/blog">Blog</Link>
            </li>
            <button
              className=" bg-slate-800 ml-20 md:ml-0 md:mx-4 w-30 bg-opacity-20 rounded-lg px-[10px] py-[6px] hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-500 ease-out delay-0 focus:outline-none  focus:ring focus:ring-blue-400 "
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
