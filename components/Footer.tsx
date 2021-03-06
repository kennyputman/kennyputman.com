import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" h-16 dark:border-t flex items-center justify-center">
        <Link href="https://github.com/kennyputman">
          <a>Github</a>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
