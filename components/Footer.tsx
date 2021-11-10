import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="h-10 dark:border-t">
        <Link href="https://github.com/kennyputman">
          <a>Github</a>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
