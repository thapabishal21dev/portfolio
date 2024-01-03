import SingleTech from "./singleTech";
import Link from "next/link";
import reactjs from "../../public/reactjs.svg";
import javascript from "../../public/javascript.svg";
import typescript from "../../public/typescript.svg";
import redux from "../../public/redux.svg";
import nextjs from "../../public/nextjs.svg";
import tailwindcss from "../../public/tailwindcss.svg";
import sass from "../../public/sass.svg";
import github from "../../public/github.svg";
import figma from "../../public/figma.svg";
import git from "../../public/git.svg";

const Technology = () => {
  return (
    <div className="flex h-auto justify-center mt-20 overflow-hidden">
      <div className=" w-2/5">
        <div>
          <h1 className=" text-center text-transparent text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500">
            Tech Stack
          </h1>
        </div>
        <div className=" p-2 my-8 justify-items-center grid grid-cols-3 gap-10 ">
          <Link href="https://react.dev/" target="_blank">
            <SingleTech name={"ReactJs"} image={reactjs} />
          </Link>
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <SingleTech name={"JavaScript"} image={javascript} />
          </Link>
          <Link href="https://www.typescriptlang.org/" target="_blank">
            {" "}
            <SingleTech name={"TypeScript"} image={typescript} />
          </Link>
          <Link href="https://redux-toolkit.js.org/" target="_blank">
            {" "}
            <SingleTech name={"Redux"} image={redux} />
          </Link>

          <Link href="https://nextjs.org/" target="_blank">
            {" "}
            <SingleTech name={"NextJs"} image={nextjs} />
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank">
            {" "}
            <SingleTech name={"TailwindCSS"} image={tailwindcss} />
          </Link>
          <Link href="https://sass-lang.com/" target="_blank">
            {" "}
            <SingleTech name={"SASS"} image={sass} />
          </Link>
          <Link href="https://github.com/" target="_blank">
            {" "}
            <SingleTech name={"GitHub"} image={github} />
          </Link>
          <Link href="https://www.figma.com/" target="_blank">
            {" "}
            <SingleTech name={"Figma"} image={figma} />
          </Link>
          <Link href="https://git-scm.com/" target="_blank">
            {" "}
            <SingleTech name={"Git"} image={git} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technology;
