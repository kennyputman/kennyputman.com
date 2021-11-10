import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mx-auto ">
        Projects
        <span className="w-10 border-b-2 "></span>
      </h2>
      <p className="mb-4 dark:text-gray-dark-soft text-gray-light-soft">
        Some things I have been working on
      </p>
      <ProjectCard></ProjectCard>
    </div>
  );
};

export default FeaturedProjects;
