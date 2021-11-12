import type { NextPage } from "next";
import React from "react";
import { ProjectCollection, ProjectGroup } from "../../components/";
import ProjectPreview from "../../components/ProjectPreview";
import projectData from "../../data/projectData";

const Projects: NextPage = () => {
  const shorts = projectData
    .filter((project) => project.filter.includes("short"))
    .slice(0, 6);

  return (
    <div className="p-2">
      <h1 className="text-6xl font-bold mt-12 mb-16 text-center">Projects</h1>
      <div className="pt-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured</h2>
        <ProjectGroup filter="featured"></ProjectGroup>
      </div>

      <h2 className="text-3xl font-bold text-center">Collections</h2>
      <p className="dark:text-gray-dark-soft mb-10 text-center">
        Collections of projects from various resources I have used
      </p>
      <ProjectCollection></ProjectCollection>
      <div className="pt-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-2 text-center">Shorts</h2>
        <p className="dark:text-gray-dark-soft  mb-10 text-center">
          Small projects, components, or games used to practice frontend skills
        </p>
        <div className="mb-32 p-2 gap-8 grid grid-col-1 md:grid-cols-2 xl:grid-cols-3">
          {shorts.map((project) => (
            <ProjectPreview key={project.id} project={project}></ProjectPreview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
