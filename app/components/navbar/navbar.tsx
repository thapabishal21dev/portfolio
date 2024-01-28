"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import MobileNav from "../mblnav";

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

  const [IsNavClick, setIsNavClick] = useState<boolean>(false);

  const handleClickNav = () => {
    setIsNavClick(!IsNavClick);
  };

  //navbar modal

  const [showNavModal, setShowNavModal] = useState(false);

  const handleClose = () => {
    setShowNavModal(!showNavModal);
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

  // <nav className=" fixed border-2 border-slate-200 dark:border-slate-700 top-2 z-50 bg-[#e3edfe] dark:bg-slate-950  backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50">
  return (
    <>
      <div id="navbar" className=" fixed dark:text-white w-full">
        <div className=" rounded-xl top-4 px-3 py-2  border-2 border-slate-200 dark:border-slate-700 z-50 bg-[#e3edfe] dark:bg-slate-950  backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50 ">
          <div className=" flex sm:bg-green-500 md:bg-red-500 justify-between items-center">
            <div className=" flex flex-row gap-1 items-center dark:hover:bg-slate-800 px-3 py-2 hover:rounded-xl hover:cursor-pointer hover:bg-slate-200">
              <Link href="/">
                <Image
                  className="w-6 mx-1 hover:text-blue-500 hover:scale-75 transition ease-in-out"
                  src="/astronaut.png"
                  width={400}
                  height={400}
                  alt="avatar"
                  property="priority"
                />
              </Link>
              <span className=" text-xl font-mono">Astronaut</span>
            </div>
            <div className=" flex gap-4">
              <div className="">
                <button
                  className=" bg-opacity-20 rounded-lg px-[10px] py-[6px] hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-500 ease-out delay-0 focus:outline-none  focus:ring focus:ring-blue-400 "
                  onClick={toggleDarkMode}
                >
                  {isClicked ? (
                    <div className="text-white gap-2 items-center flex flex-row">
                      <span className=" text-xl">
                        <FaSun />
                      </span>
                      <span className=" sm:hidden text-sm text-white gap-4 items-center flex flex-row ">
                        Light Mode
                      </span>
                    </div>
                  ) : (
                    <div className="  text-black  gap-2 items-center flex flex-row  ">
                      <span className=" text-xl">
                        <FaMoon />
                      </span>
                      <span className="sm:hidden text-sm">Dark Mode</span>
                    </div>
                  )}
                </button>
              </div>{" "}
              <div className="">
                {IsNavClick ? (
                  <div className=" text-3xl" onClick={handleClickNav}>
                    <RxCross2 />
                  </div>
                ) : (
                  <div className=" text-3xl" onClick={handleClickNav}>
                    <HiOutlineBars3 />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {IsNavClick && <MobileNav />}

        {/* <div id="navbar" className="flex justify-center  ">
          <nav className=" fixed hidden border-2 md:hidden border-slate-200 dark:border-slate-700 top-4 mt-2 z-50  w-[780px] md:w-fit rounded-xl bg-[#e3edfe] dark:bg-slate-950  h-14 backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50">
            <ul className="text-[16px] md:bg-cyan-500  md: sm:bg-red-500 flex-row gap-8 dark:text-slate-300 flex font-medium items-center">
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
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
