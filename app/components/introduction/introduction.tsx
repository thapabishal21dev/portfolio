"use client"
import React from "react";
import Image from "next/image";
import localFont from "next/font/local"
const myFont = localFont({src: "../../../fonts/BasierCircle-Bold.ttf"})

const Introduction = () => {


  return (
    <div  className=" flex justify-center mb-10 ">
      <div className=" flex flex-row w-3/5 ">
    <div className=" w-2/3">
    <div className=" flex flex-col mt-5">
    <h1 style={myFont.style} className="text-[48px] bg-gradient-to-r from-[#00baff] to-[#063ef9] inline-block text-transparent bg-clip-text font-extrabold">Hey, I&apos;m Bishal Thapa</h1>
    <div className=" flex flex-row items-center" >
    <p style={myFont.style} className=" font-bold text-xl">Frontend Software Developer from Kathmandu,Nepal</p>
    <Image
              className=" rounded-full w-8"
              src="/nepalflag.svg"
              width={200}
              height={200}
              alt="avatar"
            />
    </div>
    
    </div>
    <div className=" flex flex-col gap-4 text-[16px] mr-10 mt-10 ">
      <p>
      As a professional software developer, I create amazing scalable web applications app to make the internet a better place. I am an advocate for a decentralized internet, with major interest in the FinTech and DeFi space. Enthusiast with experience in production level technologies.
      </p>
    
    </div>
      {/* <div className="  flex w-3/5 bg-slate-300 w-50% ">
      <div className=" flex flex-col mt-5">
    <h1 style={myFont.style} className="text-[56px] bg-gradient-to-r from-[#00baff] to-[#063ef9] inline-block text-transparent bg-clip-text font-extrabold">Hey, I&apos;m Bishal Thapa</h1>
    <div className=" flex flex-row items-center" >
    <p style={myFont.style} className=" font-bold text-xl">Frontend Software Developer from Kathmandu,Nepal</p>
    <Image
              className=" rounded-full w-8"
              src="/nepalflag.svg"
              width={200}
              height={200}
              alt="avatar"
            />
    </div>
    
    </div>
    <div className=" text-justify flex flex-col gap-4 text-[16px] mt-10 ">
      <p>
      As a professional software developer, I create amazing scalable web applications app to make the internet a better place. I am an advocate for a decentralized internet, with major interest in the FinTech and DeFi space. Enthusiast with experience in production level technologies.
      </p>
    </div>
        <div className=" w-50% flex justify-center">
          <Image
            className=" text-center w-4/5"
            src="/portfolio.jpg"
            width={1000}
            height={1000}
            alt="avatar"
          />
        </div>
      </div> */}
    </div>
    <div className=" w-1/3">
    <Image
            className=" text-center "
            src="/portfolio.jpg"
            width={1000}
            height={1000}
            alt="avatar"
          />
    </div>
    </div>
    </div>
  );
};

export default Introduction;
