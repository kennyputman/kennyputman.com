import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div className="p-2">
      <h1>Hi There!</h1>
      <p>I&apos;m Kenny. I like building things and solving problems</p>
      <p>I often work with React, Express, Typescript, and ASP.NET</p>
      <Skills />
    </div>
  );
};

export default Home;
