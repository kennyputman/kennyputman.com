import ProjectCard from "./ProjectCard";
import projectData from "../data/projectData";

type Props = {
  filter: string;
};

const ProjectGroup = ({ filter }: Props) => {
  const featuredProjects = projectData.filter((project) =>
    project.filter?.includes(filter)
  );
  return (
    <div className="mb-8">
      {featuredProjects.map((project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
  );
};

export default ProjectGroup;
