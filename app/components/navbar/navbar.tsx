"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClickToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="flex justify-center my-6 ">
      <div className=" px-12 bg-white sm:block py-2 rounded-xl hidden w-3/5 ">
        <ul className="  gap-8 min-[640px]:flex items-center  ">
          <li className=" hover:cursor-pointer  font-bold underline text-xl rounded-xl p-2">
            <Image
              className=" rounded-full w-10"
              src="/avatar.png"
              width={200}
              height={200}
              alt="avatar"
            />
          </li>
          <Link href="/">
            <li className=" hover:cursor-pointer hover:bg-[#e6e6e6] rounded-xl p-2">
              Home
            </li>
          </Link>

          <li className=" hover:cursor-pointer hover:bg-[#e6e6e6] rounded-xl p-2">
            About
          </li>
          <li className=" hover:cursor-pointer hover:bg-[#e6e6e6] rounded-xl p-2">
            {" "}
            Projects
          </li>
          <li className=" hover:cursor-pointer hover:bg-[#e6e6e6] rounded-xl p-2">
            Technology
          </li>
          <li className=" hover:cursor-pointer hover:bg-[#e6e6e6] rounded-xl p-2 ">
            Blog
          </li>
          <button className=" pl-20" onClick={handleClickToggle}>
            {isToggled ? (
              <div className=" text-yellow-600 text-[20px]">
                {" "}
                <FaSun />
              </div>
            ) : (
              <div className=" text-gray-500 text-[20px]">
                <FaMoon />
              </div>
            )}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
