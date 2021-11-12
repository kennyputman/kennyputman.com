import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "./types/propTypes";
import CSS from "csstype";

const ProjectPreview = ({ project }: ProjectProps) => {
  const bgImage: CSS.Properties = {
    backgroundImage: `url(${project.imgPath})`,
    backgroundSize: "cover",
  };

  return (
    <div className="mb-4">
      <div className="relative h-80 w-80 group">
        <div
          className="absolute inset-0 bg-cover bg-current z-0 rounded-t-lg"
          style={bgImage}
        ></div>
        <div
          className="opacity-100 group-hover:opacity-0 duration-300 absolute bottom-0 z-10 w-full  h-1/2 flex flex-col items-center bg-white
      text-gray-800 p-4 text-center dark:bg-fx-dark-second dark:text-gray-100"
        >
          <p className="text-xl  font-bold mb-2">{project.title}</p>
          <p className="dark:text-gray-dark-soft">{project.description}</p>
        </div>
      </div>
      <div className="h-12 w-80 bg-white rounded-b-lg text-gray-800 flex justify-around items-center border-t border-gray-400 dark:bg-fx-dark-second dark:text-gray-100">
        <a href={project.githubUrl}>Github</a>
        <a href={project.websiteUrl}>Website</a>
      </div>
    </div>
  );
};

export default ProjectPreview;
