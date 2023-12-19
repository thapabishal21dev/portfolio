import SingleTech from './singleTech';
import Link from 'next/link';
import reactjs from '../../public/reactjs.svg'
import javascript from '../../public/javascript.svg'
import typescript from '../../public/typescript.svg'
import redux from '../../public/redux.svg'
import nextjs from '../../public/nextjs.svg'
import tailwindcss from '../../public/tailwindcss.svg'
import sass from '../../public/sass.svg'
import github from '../../public/github.svg'
import figma from '../../public/figma.svg'




const Technology = () => {
  return <div className="flex justify-center">
    <div className=" w-3/5">
    <div>
    <h1 className=" text-center text-transparent text-5xl font-extrabold bg-clip-text bg-gradient-to-r from-yellow-200 to-red-500"
>
  Tech Stack
</h1>
</div>
<div className=" w-full  p-2 my-12 justify-items-center grid grid-cols-3 gap-10 ">
  <a href="https://react.dev/"><SingleTech name={"ReactJs"} image={reactjs} /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><SingleTech name={"JavaScript"} image={javascript}/></a>
  <a href="https://www.typescriptlang.org/">  <SingleTech name={"TypeScript"} image={typescript}   />
</a>
  <a href="https://redux-toolkit.js.org/">  <SingleTech name={"Redux"} image={redux}   />
</a>
  <a href="https://nextjs.org/">  <SingleTech name={"NextJs"} image={nextjs}    />
</a>
  <a href="https://tailwindcss.com/">  <SingleTech name={"TailwindCSS"} image={tailwindcss}   />
</a>
  <a href="https://sass-lang.com/">  <SingleTech name={"SASS"} image={sass}   />
</a>
  <a href="https://github.com/">  <SingleTech name={"GitHub"} image={github}   />
</a>
  <a href="https://www.figma.com/">  <SingleTech name={"Figma"} image={figma}   />
</a>

</div>
    </div>
  </div>;
};

export default Technology;
