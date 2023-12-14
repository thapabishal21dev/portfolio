import React from "react";
import Image from "next/image";

const Footer = () => {
  let currentYear = new Date();

  return (
    <div className=" mt-[200px] flex justify-center ">
      <div className=" px-3 w-3/5  flex justify-between">
        <div className="flex ">
          <h1 className=" px-1">Built with : </h1>
          <p className=" flex items-center px-1  gap-1">
            <Image
              className=" rounded-full w-4"
              src="/nextjs.svg"
              width={200}
              height={200}
              alt="avatar"
            />
            Nextjs
          </p>
          <p className=" flex items-center px-1  gap-1">
            <Image
              className=" rounded-full w-4"
              src="/tailwindcss.svg"
              width={200}
              height={200}
              alt="avatar"
            />
            TailwindCSS
          </p>
          <p className=" flex items-center px-1  gap-1">
            <Image
              className="  w-4"
              src="/vercel.svg"
              width={200}
              height={200}
              alt="avatar"
            />
          Vercel
          </p>
        </div>
        <div>
          <p className="  text-sm">
            Copyright © Thomas Jake {currentYear.getFullYear()} All rights
            Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
