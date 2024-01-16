import SingleTech from "./singleTech";
import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { MdOutlineJavascript } from "react-icons/md";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiGit } from "react-icons/si";

const Technology = () => {
  return (
    <div className="flex h-auto justify-center mt-20 overflow-hidden">
      <div className=" w-[780px] px-28 dark:text-white ">
        <div>
          <h1 className=" text-center text-transparent text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500">
            Tech Stack
          </h1>
        </div>
        <div className=" p-2 my-8 justify-items-center grid grid-cols-3 gap-10 ">
          <Link href="https://react.dev/" target="_blank">
            <SingleTech name={"ReactJs"} image={<FaReact />} />
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <SingleTech name={"JavaScript"} image={<MdOutlineJavascript />} />
          </Link>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            {" "}
            <SingleTech name={"TypeScript"} image={<SiTypescript />} />
          </Link>
          <Link href="https://redux-toolkit.js.org/" target="_blank">
            {" "}
            <SingleTech name={"Redux"} image={<SiRedux />} />
          </Link>

          <Link href="https://nextjs.org/" target="_blank">
            {" "}
            <SingleTech name={"NextJs"} image={<SiNextdotjs />} />
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank">
            {" "}
            <SingleTech name={"TailwindCSS"} image={<SiTailwindcss />} />
          </Link>
          <Link href="https://sass-lang.com/" target="_blank">
            {" "}
            <SingleTech name={"SASS"} image={<SiSass />} />
          </Link>
          <Link href="https://github.com/" target="_blank">
            {" "}
            <SingleTech name={"GitHub"} image={<SiGithub />} />
          </Link>
          <Link href="https://www.figma.com/" target="_blank">
            {" "}
            <SingleTech name={"Figma"} image={<SiFigma />} />
          </Link>
          <Link href="https://git-scm.com/" target="_blank">
            {" "}
            <SingleTech name={"Git"} image={<SiGit />} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technology;
