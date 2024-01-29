import Link from "next/link";
import React from "react";

const MobileNav = () => {
  return (
    <div>
      <div className="text-black dark:text-white h-screen w-screen ">
        <ul className="text-xl py-12 flex-col gap-8 flex font-medium items-center">
          <li className=" dark:hover:text-cyan-600 hover:text-cyan-500 hover:underline hover:underline-offset-2 p-2">
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
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
