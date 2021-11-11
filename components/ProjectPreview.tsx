import Image from "next/image";
import { ProjectProps } from "./types/propTypes";
import CSS from "csstype";

const ProjectPreview = ({ project }: ProjectProps) => {
  const bgImage: CSS.Properties = {
    backgroundImage: `url(${project.imgPath})`,
    backgroundSize: "cover",
  };

  return (
    <div className="flex sm:flex-row flex-col h-96 w-96">
      <div className="flex-1 rounded-xl" style={bgImage}>
        <h3 className="text-center text-2xl font-semibold p-2">
          {project.title}
        </h3>
        <div className="p-4 dark:text-gray-dark-soft">
          <p>{project.description}</p>
        </div>
        <div className="flex justify-center gap-4">
          {project.technologies.map((tech) => (
            <p key={tech} className="dark:text-txt-emph font-semibold">
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
