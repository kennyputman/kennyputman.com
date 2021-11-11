import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ProjectGroup, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-4 mt-24 sm:mt-32 flex flex-col items-center">
      <div className="my-3.5 mb-40">
        <h2 className="text-xl dark:text-txt-emph mb-4">Hi, my name is</h2>
        <h1 className="text-4xl sm:text-6xl font-bold mb-8">Kenny Putman</h1>
        <div className="text-gray-700 dark:text-gray-400">
          <p className="font-semibold text-xl sm:text-3xl mb-2">
            I like building things and solving problems
          </p>
          <p className="text-l sm:text-xl ">
            When I&apos;m not glued to my keyboard you can find me outdoors
          </p>
        </div>
      </div>
      <Skills />
      <h2 className="text-3xl font-semibold mx-auto ">
        Projects
        <span className="w-10 border-b-2 "></span>
      </h2>
      <p className=" dark:text-gray-dark-soft text-gray-light-soft">
        Some things I have been working on
      </p>
      <ProjectGroup filter="featured"></ProjectGroup>
    </div>
  );
};

export default Home;
