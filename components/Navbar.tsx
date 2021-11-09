import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="h-12 border-solid border-b border-dark:text-gray-300 flex justify-left">
        <nav className="space-x-4 h-full flex items-center pl-4">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
