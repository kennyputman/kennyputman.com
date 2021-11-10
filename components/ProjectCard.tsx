import Image from "next/image";

type Props = {
  title: string;
  description: string;
  technologies: string[];
};

const ProjectCard = ({ title, description, technologies }: Props) => {
  console.log(title);
  return (
    <div className="flex dark:bg-fx-dark-second rounded-md p-4">
      {/* Project GIF */}
      <div className="flex-1">
        <Image src="/logos/graphql.svg" alt="" height={250} width={250} />
      </div>
      {/* Project Description */}
      <div className="flex-1">
        <h3 className="text-center text-2xl font-semibold p-2">{title}</h3>
        <div className="p-4 ">
          <p>{description}</p>
        </div>
        <div className="flex justify-center gap-4">
          {technologies.map((tech) => (
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
