import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "./types/propTypes";

const ProjectPreview = ({ project }: ProjectProps) => {
  return (
    <div className="mb-8 ">
      <div className="relative h-80 w-80 group">
        <a href={project.websiteUrl}>
          <Image
            src={project.imgPath}
            alt=""
            height={320}
            width={320}
            className="rounded-xl"
          />
        </a>
      </div>
      <div className="w-80 bg-gray-100 flex flex-col dark:bg-fx-dark-primary">
        <div className="p-2">
          <p className=" text-gray-light-soft dark:text-gray-dark-soft">
            {project.description}
          </p>
        </div>
        <div className="flex justify-around">
          <a href={project.githubUrl}>Github</a>
          <a href={project.websiteUrl}>Website</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
