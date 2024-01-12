"use client";
import React, { useState } from "react";
import Image from "next/image";

interface IpropsIntro {
  intro: string;
  subIntro: string;
  image: any;
  heading: string;
  emojHand: string;
}

const AboutUs = (props: IpropsIntro) => {
  return (
    <div className=" flex justify-center w-screen pt-24 dark:bg-slate-900 text-black dark:text-white">
      <div className=" max-w-[780px] ">
        <div className=" flex flex-col">
          <h1 className=" text-center  font-extrabold text-5xl text-[#757575]">
            {props.heading}
          </h1>
          <div className="flex flex-row items-center ">
            <p className=" text-4xl">{props.emojHand}</p>
            <h1 className="text-[56px] bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-extrabold">
              {" "}
              {props.intro}
            </h1>
          </div>
          <div className=" flex flex-row items-center">
            <p className=" font-bold text-xl">{props.subIntro}</p>
            <Image
              className=" rounded-full w-8"
              src={props.image}
              width={200}
              height={200}
              alt="&nbsp;"
            />
          </div>
        </div>
        <div className=" text-justify flex flex-col gap-4 text-[16px]">
          <p>
            As a professional software developer, I create amazing scalable web
            applications app to make the internet a better place. I am an
            advocate for a decentralized internet, with major interest in the
            FinTech and DeFi space. Enthusiast with experience in production
            level technologies.
          </p>
          <p>
            I am 27 years old and have been a professional web developer for
            about 5 years now. The technologies I work with are JavaScript,
            Python and Solidity with a focus on Django, React.js, Next.js, Node
            and Express. I use code not only to do my day-to-day job, but also
            to contribute to open-source projects.
          </p>
          <p>
            When I am not writing code I love to spend time with my family and
            friends in Lagos. I hang around a couple of DAOs on Discord and
            actively contribute to the MoonShot Collective work-stream of
            GitcoinDAO and I love to read fiction and non-fiction books, watch
            sci-fi movies and play games on my playstation console.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
