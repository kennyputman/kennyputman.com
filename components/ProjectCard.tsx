import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="flex">
      {/* Project GIF */}
      <div className="flex-1">
        <Image src="/logos/graphql.svg" alt="" height={250} width={250} />
      </div>
      {/* Project Description */}
      <div className="flex-1">
        <h3>Product Feedback Page</h3>
        <div>
          <p>
            Forum for taking in user feedback and prioritizing features requests
          </p>
        </div>
        <div className="flex dark:to-txt-emph gap-1">
          <p>React</p>
          <p>Typescript</p>
          <p>GraphQL</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
