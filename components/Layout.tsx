import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTheme } from "next-themes";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 flex flex-col min-h-screen">
      <Navbar handleTheme={handleTheme} />
      <main className="container mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
