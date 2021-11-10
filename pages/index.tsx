import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-4">
      <div className="my-3.5 mb-6">
        <h1 className="text-2xl font-bold mb-4">Hi There!</h1>
        <p>
          I&apos;m Kenny. I like building things and solving problems. When
          I&apos;m not glued to my keyboard you can find me outdoors.
        </p>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
