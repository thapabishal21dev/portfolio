import img1 from "@/public/projectImg/img1.png";
import img2 from "@/public/projectImg/img2.png";
import img3 from "@/public/projectImg/img3.png";
import img4 from "@/public/projectImg/img4.png";
import img5 from "@/public/projectImg/img5.png";
import img6 from "@/public/projectImg/img6.png";

export interface IProject {
  params?: string;
  projectId?: number;
  projectImg?: any;
  projectTitle?: string;
  projectDescription?: string;
  projectLink?: string;
  projectGithub?: string;
  projectBorderColor?: string;
  projectShadowColor?: string;
  projectBorderColorLight?: string;
  projectBgColorLight?: string;
  projectShadowColorLight?: string;
}

export const ProjectsList: IProject[] = [
  {
    projectId: 1,
    projectImg: img6,
    projectTitle: "Portfolio",
    projectDescription: "Created Portfolio using Nextjs,Reactjs,tailwindCSS",
    projectLink: "portfolio-thapabishal21tech.vercel.app",
    projectGithub: "/portfolio",
    projectBorderColor: "dark:hover:border-green-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#22c55e]`,
    projectBorderColorLight: "hover:border-green-500",
    projectBgColorLight: "hover:bg-green-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#22c55e]`,
  },
  {
    projectId: 2,
    projectImg: img5,
    projectTitle: "Turnstone-Education",
    projectDescription:
      "Learning Educational website using nextjs,reactjs,sass",
    projectLink: "project-turnstone-thapabishal21tech.vercel.app",
    projectGithub: "/project_turnstone",
    projectBorderColor: "dark:hover:border-blue-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#3b82f6]`,
    projectBorderColorLight: "hover:border-blue-500",
    projectBgColorLight: "hover:bg-blue-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#3b82f6]`,
  },
  {
    projectId: 3,
    projectImg: img4,
    projectTitle: "React-Taskapp",
    projectDescription: "crudtask-app",
    projectLink: "thapabishal21tech.github.io/React-task-app",
    projectGithub: "/React-task-app",
    projectBorderColor: "dark:hover:border-cyan-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#06b6d4]`,
    projectBorderColorLight: "hover:border-cyan-500",
    projectBgColorLight: "hover:bg-cyan-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#06b6d4]`,
  },
  {
    projectId: 4,
    projectImg: img3,
    projectTitle: "Crud-App",
    projectDescription: "fullcrud-task-app",
    projectLink: "thapabishal21tech.github.io/CrudApp_task2",
    projectGithub: "/CrudApp_task2",
    projectBorderColor: "dark:hover:border-violet-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#8b5cf6]`,
    projectBorderColorLight: "hover:border-violet-500",
    projectBgColorLight: "hover:bg-violet-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#8b5cf6]`,
  },
  {
    projectId: 5,
    projectImg: img1,
    projectTitle: "tailwind-Responsive-Site",
    projectDescription: "full resonsive website",
    projectLink: "thapabishal21tech.github.io/tailwind-responsive-design",
    projectGithub: "/tailwind-responsive-design",
    projectBorderColor: "dark:hover:border-pink-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#ec4899]`,
    projectBorderColorLight: "hover:border-pink-500",
    projectBgColorLight: "hover:bg-pink-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#ec4899]`,
  },
  {
    projectId: 6,
    projectImg: img2,
    projectTitle: "Responsive-Site",
    projectDescription: "responsive site",
    projectLink: "thapabishal21tech.github.io/Responsivewebsite",
    projectGithub: "/Responsivewebsite/tree/gh-pages",
    projectBorderColor: "dark:hover:border-sky-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#0ea5e9]`,
    projectBorderColorLight: "hover:border-sky-500",
    projectBgColorLight: "hover:bg-sky-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#0ea5e9]`,
  },
];
