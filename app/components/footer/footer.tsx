import React from "react";
import Image from "next/image";

const Footer = () => {
  let currentYear = new Date();

  return (
    <div className=" my-[50px] flex justify-center text-[16px] ">
      <div className=" px-3 w-3/5 flex flex-col gap-2 items-center justify-center ">
        <div className="flex">
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
          <p className=" flex items-center px-1 gap-1">
            <Image
              className=" rounded-full w-4"
              src="/tailwindcss.svg"
              width={200}
              height={200}
              alt="avatar"
            />
            TailwindCSS
          </p>
          <p className=" flex items-center px-1 gap-1">
            <Image
              className=" w-4"
              src="/vercel.svg"
              width={200}
              height={200}
              alt="avatar"
            />
          Vercel
          </p>
        </div>
        <div>
          <p className=" font-bold text-gray-500">
           Made by Bishal Thapa
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
