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

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "dark");
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
    <div id="navbar" className=" flex justify-center w-screen mx-auto">
      <div className="fixed rounded-xl top-2 mt-2 z-50 bg-slate-400 backdrop-blur-[6px] dark:backdrop-blur-[6px] dark:bg-gray-800 dark:bg-opacity-90 border-1 bg-opacity-40 transition-all duration-500 ease-out delay-0">
        <div className=" px-12 sm:block hidden ">
          <ul className=" text-[16px] text-black gap-8 h-[54px] dark:text-slate-400 min-[640px]:flex font-medium items-center">
            <Link href="/">
              <li className=" text-xl rounded-xl p-2">
                <Image
                  className="rounded-full w-10"
                  src="/avatar.png"
                  width={200}
                  height={200}
                  alt="avatar"
                />
              </li>
            </Link>
            <Link href="/about">
              <li className=" hover:text-slate-600 dark:hover:text-slate-300 p-2">
                About
              </li>
            </Link>
            <Link href="/projects">
              <li className=" hover:text-slate-600 dark:hover:text-slate-300 p-2">
                Projects
              </li>
            </Link>
            <Link href="/technology">
              <li className=" hover:text-slate-600 dark:hover:text-slate-300  p-2">
                Technology
              </li>
            </Link>
            <Link href="/blog">
              <li className=" hover:text-slate-600 dark:hover:text-slate-300 p-2">
                Blog
              </li>
            </Link>

            <button
              className="  bg-slate-400 ml-12 w-30 bg-opacity-20 rounded-lg px-[10px] py-[6px] hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-500 ease-out delay-0 focus:outline-none  focus:ring focus:ring-blue-400 "
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
