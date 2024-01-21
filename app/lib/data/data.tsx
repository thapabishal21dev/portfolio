import img1 from "@/public/projectImg/img1.png";
import img2 from "@/public/projectImg/img2.png";
import img3 from "@/public/projectImg/img3.png";
import img4 from "@/public/projectImg/img4.png";
import img5 from "@/public/projectImg/img5.png";
import img6 from "@/public/projectImg/img6.png";

interface IProject {
  projectId?: number;
  projectImg?: any;
  projectTitle?: string;
  projectDescription?: string;
  projectLink?: string;
  projectGithub?: string;
}

export const ProjectsList: IProject[] = [
  {
    projectId: 1,
    projectImg: img6,
    projectTitle: "Portfolio",
    projectDescription: "Created Portfolio using Nextjs,Reactjs,tailwindCSS",
    projectLink: "portfolio-thapabishal21tech.vercel.app",
    projectGithub: "/portfolio",
  },
  {
    projectId: 2,
    projectImg: img5,
    projectTitle: "Turnstone-Education",
    projectDescription:
      "Learning Educational website using nextjs,reactjs,sass",
    projectLink: "project-turnstone-thapabishal21tech.vercel.app",
    projectGithub: "/project_turnstone",
  },
  {
    projectId: 3,
    projectImg: img4,
    projectTitle: "React-Taskapp",
    projectDescription: "crudtask-app",
    projectLink: "thapabishal21tech.github.io/React-task-app",
    projectGithub: "/React-task-app",
  },
  {
    projectId: 4,
    projectImg: img3,
    projectTitle: "Crud-App",
    projectDescription: "fullcrud-task-app",
    projectLink: "thapabishal21tech.github.io/CrudApp_task2",
    projectGithub: "/CrudApp_task2",
  },
  {
    projectId: 5,
    projectImg: img1,
    projectTitle: "tailwind-Responsive-Site",
    projectDescription: "full resonsive website",
    projectLink: "thapabishal21tech.github.io/tailwind-responsive-design",
    projectGithub: "/tailwind-responsive-design",
  },
  {
    projectId: 6,
    projectImg: img2,
    projectTitle: "Responsive-Site",
    projectDescription: "responsive site",
    projectLink: "thapabishal21tech.github.io/Responsivewebsite",
    projectGithub: "/Responsivewebsite/tree/gh-pages",
  },
];
