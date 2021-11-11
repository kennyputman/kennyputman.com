import Image from "next/image";

type ProjectTypes = {
  pid: number;
  title: string;
  description: string;
  technologies: string[];
  imgPath: string;
  githubUrl: string;
  websiteUrl: string;
};

interface ProjectProps {
  project: ProjectTypes;
}

const ProjectCard = ({ project }: ProjectProps) => {
  console.log(project);
  return (
    <div className="flex sm:flex-row flex-col p-4 max-w-4xl mb-12">
      {/* Project GIF */}
      <div className="flex-1 text-center">
        <a href={project.websiteUrl}>
          <Image
            src={project.imgPath}
            alt=""
            height={300}
            width={400}
            className="rounded-xl"
          />
        </a>
      </div>
      {/* Project Description */}
      <div className="flex-1">
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

export default ProjectCard;
