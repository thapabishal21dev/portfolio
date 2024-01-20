import { FaReact } from "react-icons/fa";

interface IProject {
  projectId?: number;
  projectImg?: string;
  projectTitle?: string;
  projectDescription?: string;
  projectLink?: string;
  projectGithub?: string;
}

export const ProjectsList: IProject[] = [
  {
    projectId: 1,
    projectImg: `${FaReact}`,
    projectTitle: "portfolio",
    projectDescription: "Created Portfolio using Nextjs,Reactjs,tailwindCSS",
    projectLink: "https://portfolio-thapabishal21tech.vercel.app/",
    projectGithub: "https://github.com/thapabishal21tech/portfolio",
  },
  {
    projectId: 2,
    projectImg: `${FaReact}`,
    projectTitle: "TurnstoneEducation",
    projectDescription:
      "Learning Educational website using nextjs,reactjs,sass",
    projectLink: "https://project-turnstone-thapabishal21tech.vercel.app/",
    projectGithub: "https://github.com/thapabishal21tech/project_turnstone",
  },
  {
    projectId: 3,
    projectImg: `${FaReact}`,
    projectTitle: "Reacttaskapp",
    projectDescription: "crudtaskapp",
    projectLink: "https://thapabishal21tech.github.io/React-task-app/",
    projectGithub: "https://github.com/thapabishal21tech/React-task-app",
  },
  {
    projectId: 4,
    projectImg: `${FaReact}`,
    projectTitle: "crudapp",
    projectDescription: "fullcrud task app",
    projectLink: "https://thapabishal21tech.github.io/CrudApp_task2/",
    projectGithub: "https://github.com/thapabishal21tech/CrudApp_task2",
  },
  {
    projectId: 5,
    projectImg: `${FaReact}`,
    projectTitle: "simpleresponsivesite",
    projectDescription: "full resonsive website",
    projectLink:
      "https://github.com/thapabishal21tech/tailwind-responsive-design",
    projectGithub: "https://github.com/thapabishal21tech/CrudApp_task2",
  },
  {
    projectId: 6,
    projectImg: `${FaReact}`,
    projectTitle: "Responsivesite",
    projectDescription: "",
    projectLink: "https://thapabishal21tech.github.io/Responsivewebsite/ ",
    projectGithub: "https://github.com/thapabishal21tech/Responsivewebsite",
  },
];
