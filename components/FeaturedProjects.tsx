import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";

const FeaturedProjects = () => {
  const featuredProjects = projectData.filter((project) =>
    project.filter?.includes("featured")
  );
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
      {featuredProjects.map((project) => (
        <ProjectCard key={project.pid} project={project}></ProjectCard>
      ))}
    </div>
  );
};

export default FeaturedProjects;
