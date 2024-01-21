import React from "react";
import ListProjects from "./listsProjects";
import { ProjectsList } from "@/app/lib/data/data";

const ProjectsListsPage: React.FC = () => {
  return (
    <>
      <div className="pt-16 transition-opacity ease-in-out duration-600 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-950 to-black flex justify-center">
        <div className="flex flex-col gap-24 w-[780px] dark:text-white pt-12 justify-center my-16">
          {ProjectsList.map((item) => (
            <div key={item.projectId}>
              <ListProjects
                params={item.projectTitle}
                projectTitle={item.projectTitle}
                projectDescription={item.projectDescription}
                productId={item.projectId}
                projectImg={item.projectImg}
              />
            </div>
          ))}

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

export default ProjectsListsPage;
