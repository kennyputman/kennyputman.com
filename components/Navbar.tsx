import Link from "next/link";
import React from "react";

type Props = {
  handleTheme: () => void;
};

const Navbar = ({ handleTheme }: Props) => {
  return (
    <>
      <header className="h-12 border-solid border-b border-dark:text-gray-300 flex justify-items-center">
        <nav className=" h-full flex items-center justify-between pl-4 pr-4  container mx-auto">
          <div className="space-x-4">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
          <div className="flex items-center">
            <button onClick={() => handleTheme()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800 dark:text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
