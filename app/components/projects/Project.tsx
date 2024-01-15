import React from "react";
import ListProject from "./listProject";

const ProjectPage = () => {
  interface IProject {
    projectImg: string;
    projectTitle: string;
    projectDescription: string;
    projectLink: string;
    projectGithub: string;
  }

  const projects: IProject[] = [
    {
      projectImg: "image1.jpg",
      projectTitle: "Project 1",
      projectDescription: "Description for Project 1",
      projectLink: "https://project1.com",
      projectGithub: "https://github.com/project1",
    },
    {
      projectImg: "image2.jpg",
      projectTitle: "Project 2",
      projectDescription: "Description for Project 2",
      projectLink: "https://project2.com",
      projectGithub: "https://github.com/project2",
    },
  ];

  return (
    <>
      {" "}
      <div className=" pt-16  transition-opacity ease-in-out duration-600 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-black flex justify-center">
        <div className=" flex flex-col gap-24 w-[780px]   dark:text-white  pt-12  justify-center my-16 ">
          <ListProject />
          <ListProject />
          <ListProject />
          <div className=" text-lg hover:cursor-pointer flex items-center mx-10">
            <a
              className=" hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1"
              href="https://github.com/thapabishal21tech"
              target="_blank"
            >
              View more on Github &#10132;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;