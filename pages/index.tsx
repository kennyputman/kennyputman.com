import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <main className="bg-gray-700 flex">
        <h1>Hi, I&lsquo;m Kenny!</h1>

        <p>I just like writing code</p>
        <p>
          My technology stack includes React, Typescript, C#, and a little
          GraphQL
        </p>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
