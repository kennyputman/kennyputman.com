import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="h-10 fixed bottom-0 inset-x-0 ">
        <hr />
        <Link href="https://github.com/kennyputman">
          <a>Github</a>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
