import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-300 flex flex-col min-h-screen">
      <Navbar />
      <main className="container mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
