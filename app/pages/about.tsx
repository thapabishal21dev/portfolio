"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SingleTech from "../technology/singleTech";
import Techstack from "../components/techstack";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiJavascript,
} from "react-icons/si";

import { RiReactjsFill } from "react-icons/ri";

const AboutPage = () => {
  return (
    <div className=" flex justify-center w-screen pt-32 dark:bg-slate-950 text-black dark:text-white">
      <div className=" w-[780px] ">
        <div className=" flex flex-col">
          <h1 className=" text-center  font-extrabold text-5xl text-[#757575]"></h1>
          <div className="flex flex-row items-center ">
            <p className=" text-2xl">👋</p>
            <h1 className="text-[40px] bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-extrabold">
              {" "}
              Hey I am Bishal Thapa
            </h1>
          </div>
          <div className=" flex flex-row items-center">
            <p className=" font-bold text-xl">
              Frontend Software Developer from Kathmandu,Nepal
            </p>
            <Image
              className=" rounded-full w-8"
              src={"/nepalflag.svg"}
              width={200}
              height={200}
              alt="&nbsp;"
            />
          </div>
        </div>
        <div className=" text-justify py-4 flex flex-col gap-4 text-[16px]">
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
        </div>
        <div>
          <Image
            className=" w-full rounded-lg my-10 bg-slate-400"
            src={"/photo.jpg"}
            width={700}
            height={700}
            alt="&nbsp;"
          />
        </div>
        <div>
          <p>
            When I am not writing code I love to spend time with my family and
            friends in Lagos. I hang around a couple of DAOs on Discord and
            actively contribute to the MoonShot Collective work-stream of
            GitcoinDAO and I love to read fiction and non-fiction books, watch
            sci-fi movies and play games on my playstation console.
          </p>
        </div>
        <div>
          <h1 className="text-xl py-5 text-neutral-300 font-semibold">
            lets connect!
          </h1>
          <p>
            Feel free to reach out to me at{" "}
            <span className=" text-blue-400 hover:underline underline-offset-2">
              {" "}
              <a href="mailto:thapabishal21sinha@gmail.com">
                thapabishal21dev@gmail.com{" "}
              </a>
            </span>
            or find me on social media:
          </p>
        </div>
        <div>
          <div className=" flex gap-6 pt-5 flex-row items-center">
            <a
              href="https://github.com/thapabishal21tech"
              target="_blank"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className=" text-[24px] dark:text-white">
                <FaGithub />
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
              target="_blank"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className="  text-[24px] dark:text-white">
                <FaLinkedin />
              </p>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className="  text-[24px] dark:text-white">
                <FaXTwitter />
              </p>
            </a>
            <a
              href="mailto:thapabishal21sinha@gmail.com"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className=" text-[24px] dark:text-white">
                <MdEmail />
              </p>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-xl py-5 bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-bold">
            Skills
          </h1>
        </div>
        <div className="  flex flex-row flex-wrap gap-4 py-4 ">
          <Techstack
            techName={"TypeScript"}
            techImg={<SiTypescript />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"ReactJs"}
            techImg={<RiReactjsFill />}
            HoverBorderColor="hover:border-cyan-400"
            hoverBgColor="hover:bg-cyan-200"
          />
          <Techstack
            techName={"NextJs"}
            techImg={<TbBrandNextjs />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"TailwindCSS"}
            techImg={<SiTailwindcss />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"JavaScript"}
            techImg={<SiJavascript />}
            HoverBorderColor="hover:border-[#F0DB4F]"
            hoverBgColor="hover:bg-[#F0DB4F]"
          />
          <Techstack
            techName={"Redux"}
            techImg={<SiRedux />}
            HoverBorderColor="hover:border-[#764abc]"
            hoverBgColor="hover:bg-[#764abc]"
          />
          <Techstack
            techName={"Sass"}
            techImg={<SiSass />}
            HoverBorderColor="hover:border-[#cc6699]"
            hoverBgColor="hover:bg-[#cc6699]"
          />
          <Techstack
            techName={"GitHub"}
            techImg={<SiGithub />}
            HoverBorderColor="hover:border-slate-400"
            hoverBgColor="hover:bg-slate-100"
          />{" "}
          <Techstack
            techName={"Figma"}
            techImg={<SiFigma />}
            HoverBorderColor="hover:border-violet-400"
            hoverBgColor="hover:bg-violet-200"
          />
          <Techstack
            techName={"Git"}
            techImg={<SiGit />}
            HoverBorderColor="hover:border-[#f14e32]"
            hoverBgColor="hover:bg-[#f14e32]"
          />
        </div>
        <div className=" py-5">
          <h1 className="text-xl py-5 bg-gradient-to-r from-pink-500 to-blue-500 inline-block text-transparent bg-clip-text font-bold">
            Experience
          </h1>
          <div className=" flex flex-col">
            <div className=" flex flex-row gap-10 py-10">
              <div className=" flex flex-row gap-10 min-w-[300px] ">
                <h1 className=" text-lg text-blue-400 ">
                  october 2023 - December 2023
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-blue-400 ">
                  Junior React Developer
                </h1>
                <p className=" text-sm font-semibold ">Freelancher</p>
                <p className=" text-sm">worked in different web application</p>
              </div>
            </div>
            <div className=" flex flex-row  gap-10 py-10">
              <div className=" flex flex-row gap-10 min-w-[300px] ">
                <h1 className=" text-lg text-cyan-400 ">
                  June 2023 - September 2023
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-blue-500 ">React Intern</h1>
                <p className=" text-sm font-semibold ">LancemeUp</p>
                <p className=" text-sm">worked in different web application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;