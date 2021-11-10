import ProjectCard from "./ProjectCard";

const projectData = {
  title: "Product Feedback Page",
  description:
    "Forum for taking in user feedback and prioritizing feature requests",
  technologies: ["React", "Typescript", "GraphQL"],
};

const FeaturedProjects = () => {
  return (
    <div className="mb-32">
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mx-auto ">
          Projects
          <span className="w-10 border-b-2 "></span>
        </h2>
        <p className=" dark:text-gray-dark-soft text-gray-light-soft">
          Some things I have been working on
        </p>
      </div>
      <ProjectCard
        title={projectData.title}
        description={projectData.description}
        technologies={projectData.technologies}
      ></ProjectCard>
    </div>
  );
};

export default FeaturedProjects;
