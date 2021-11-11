import type { NextPage } from "next";
import ProjectGroup from "../components/ProjectGroup";

const Projects: NextPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-6xl font-bold mb-24">Projects</h1>
      <h2>Featured</h2>
      <ProjectGroup filter="featured"></ProjectGroup>
      <h2>Collections</h2>
      <h2>Shorts</h2>
    </div>
  );
};

export default Projects;
