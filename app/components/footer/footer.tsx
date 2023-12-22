import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  let currentYear = new Date();

  return (
    <div className=" mt-16">
      <div className=" flex justify-center gap-12 flex-row items-center">
        <Link href="https://github.com/thapabishal21tech" target="_blank">
        <Image
              className=" rounded-full w-8 hover:scale-110 transition duration-500"
              src="/github.svg"
              width={200}
              height={200}
              alt="avatar"
            />
        </Link>
        <Link href="https://www.linkedin.com/in/thapa-bishal-64340622a/" target="_blank"><Image
              className=" rounded-full w-10 hover:scale-110 transition duration-500"
              src="/linkedin.svg"
              width={200}
              height={200}
              alt="avatar"
            /></Link>         
        <Link href="https://twitter.com/" target="_blank">
        <Image
              className=" rounded-full w-8 hover:scale-110 transition duration-500"
              src="/X.svg"
              width={200}
              height={200}
              alt="avatar"
            />
        </Link>
        <Link href="mailto:thapabishal21sinha@gmail.com" target="_blank">
        <Image
              className=" rounded-full w-10 hover:scale-110 transition duration-500"
              src="/email.svg"
              width={200}
              height={200}
              alt="avatar"
            />
        </Link>
      </div>
    <div className=" my-[50px] flex justify-center text-[16px] font-semibold">
      <div className=" px-3 w-3/5 flex flex-col gap-2 items-center justify-center ">
        <div className="flex">
          <h1 className=" px-1">Built with : </h1>
          <p className=" flex items-center px-1  gap-1">
            <Image
              className=" rounded-full w-4 "
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
      </div>
    </div>
    </div>
  );
};

export default Footer;
