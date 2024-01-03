"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClickToggle = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const isScrolled = window.scrollY > 500;

      navbar.classList.toggle("translate-y-[-100%]", isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Run the effect only once on component mount

  return (
    <div
      id="navbar"
      className=" flex justify-center transition-transform duration-300 ease-in-out "
    >
      <div className="fixed rounded-xl top-0 mt-2 w-4/6 z-50 bg-slate-400 bg-opacity-40 backdrop-blur-[10px]">
        <div className=" px-12 sm:block hidden">
          <ul className=" gap-8 min-[640px]:flex font-medium items-center">
            <Link href="/">
              <li className=" hover:cursor-pointer mr-16 font-bold underline text-xl rounded-xl p-2">
                <Image
                  className=" rounded-full w-10"
                  src="/avatar.png"
                  width={200}
                  height={200}
                  alt="avatar"
                />
              </li>
            </Link>
            <Link href="/about">
              {" "}
              <li className=" hover:cursor-pointer text-black hover:text-[#6a6a6a] rounded-xl p-2">
                About
              </li>
            </Link>
            <Link href="/projects">
              {" "}
              <li className=" hover:cursor-pointer text-black hover:text-[#6a6a6a] rounded-xl p-2">
                {" "}
                Projects
              </li>
            </Link>

            <Link href="/technology">
              {" "}
              <li className=" hover:cursor-pointer text-black hover:text-[#6a6a6a] rounded-xl p-2">
                Technology
              </li>
            </Link>
            <Link href="/blog">
              <li className=" hover:cursor-pointer text-black hover:text-[#6a6a6a] rounded-xl p-2">
                Blog
              </li>
            </Link>
            <button className=" pl-20 " onClick={handleClickToggle}>
              {isToggled ? (
                <div className=" text-yellow-700 text-[24px]">
                  {" "}
                  <FaSun />
                </div>
              ) : (
                <div className=" text-gray-700 text-[24px]">
                  <FaMoon />
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
