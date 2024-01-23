// "use client";
// import { ApiDataContext } from "@/app/context/context";
// import { useContext } from "react";
// import Link from "next/link";
// import { IProject } from "@/app/lib/data/data";

// const ListProjects = ({
//   params,
//   projectTitle,
//   projectDescription,
//   projectId,
//   projectBorderColor,
//   projectShadowColor,
//   projectBorderColorLight,
//   projectBgColorLight,
//   projectShadowColorLight,
// }: IProject) => {
//   const { setUserApiData } = useContext(ApiDataContext);

//   const handleClick = () => {
//     setUserApiData(projectId);
//   };

//   return (
//     <>
//       <div>
//         <Link href={`/projects/${params}`}>
//           <div
//             onClick={handleClick}
//             className={`cursor-pointer space-y-2 overflow-hidden  border-base-800 border-2 dark:border-slate-600 dark:hover:border-2 dark:hover:bg-gradient-to-br from-base-900 to-base-900/80 ${projectBorderColor} ${projectShadowColor} ${projectBorderColorLight} ${projectBgColorLight} ${projectShadowColorLight} bg-slate-100 transition duration-300  flex flex-row items-center w-[370px] h-[100px] dark:bg-slate-950 rounded-xl hover:translate-x-[-5px]  hover:translate-y-[-5px] ease-out px-6 dark:text-slate-400  `}
//           >
//             {" "}
//             <div className=" w-[270px] text-transparent text-md bg-clip-text bg-gradient-to-r from-indigo-500 to-sky-500 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500">
//               <h1 className=" text-lg font-semibold">{projectTitle}</h1>
//               <p className=" text-sm truncate">{projectDescription}</p>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default ListProjects;
