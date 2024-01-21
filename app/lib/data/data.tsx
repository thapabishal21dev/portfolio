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
    projectTitle: "Portfolio",
    projectDescription: "Created Portfolio using Nextjs,Reactjs,tailwindCSS",
    projectLink: "portfolio-thapabishal21tech.vercel.app",
    projectGithub: "github.com/thapabishal21tech/portfolio",
  },
  {
    projectId: 2,
    projectImg: `${FaReact}`,
    projectTitle: "Turnstone-Education",
    projectDescription:
      "Learning Educational website using nextjs,reactjs,sass",
    projectLink: "project-turnstone-thapabishal21tech.vercel.app",
    projectGithub: "github.com/thapabishal21tech/project_turnstone",
  },
  {
    projectId: 3,
    projectImg: `${FaReact}`,
    projectTitle: "React-Taskapp",
    projectDescription: "crudtask-app",
    projectLink: "thapabishal21tech.github.io/React-task-app",
    projectGithub: "github.com/thapabishal21tech/React-task-app",
  },
  {
    projectId: 4,
    projectImg: `${FaReact}`,
    projectTitle: "Crud-App",
    projectDescription: "fullcrud-task-app",
    projectLink: "thapabishal21tech.github.io/CrudApp_task2",
    projectGithub: "github.com/thapabishal21tech/CrudApp_task2",
  },
  {
    projectId: 5,
    projectImg: `${FaReact}`,
    projectTitle: "Simple-Responsive-Site",
    projectDescription: "full resonsive website",
    projectLink: "github.com/thapabishal21tech/tailwind-responsive-design",
    projectGithub: "github.com/thapabishal21tech/CrudApp_task2",
  },
  {
    projectId: 6,
    projectImg: `${FaReact}`,
    projectTitle: "Responsive-Site",
    projectDescription: "responsive site",
    projectLink: "thapabishal21tech.github.io/Responsivewebsite ",
    projectGithub: "github.com/thapabishal21tech/Responsivewebsite",
  },
];
