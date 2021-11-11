import type { NextPage } from "next";
import React from "react";
import { ProjectCollection, ProjectGroup } from "../components/";

const Projects: NextPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-6xl font-bold mb-24">Projects</h1>
      <h2 className="text-3xl font-bold mb-12 text-center">Featured</h2>
      <ProjectGroup filter="featured"></ProjectGroup>
      <h2 className="text-3xl font-bold text-center">Collections</h2>
      <p className="dark:text-gray-dark-soft mb-12 text-center">
        Collections of projects from various resources I have used
      </p>
      <ProjectCollection></ProjectCollection>
      <h2 className="text-3xl font-bold mb-12 text-center mb-96">Shorts</h2>
    </div>
  );
};

export default Projects;
