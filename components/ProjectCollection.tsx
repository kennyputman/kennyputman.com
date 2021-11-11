import React from "react";
import Image from "next/image";
import CollectionCard from "./CollectionCard";
const collections = [
  {
    id: 1,
    title: "The Odin Project",
    description:
      "A project focused open source bootcamp focusing on Javscript, HTML/CSS, and node.js",
    imgPath: "/logos/odin-project.svg",
    websiteUrl: "https://www.theodinproject.com/",
  },
  {
    id: 2,
    title: "Frontend Mentor",
    description:
      "Frontend Mentor aims to recreate the developer experience by providing design specs and assets",
    imgPath: "/logos/frontend-mentor.svg",
    websiteUrl: "https://www.frontendmentor.io/",
  },
];

const ProjectCollection = () => {
  const collection = collections[0];
  return (
    <div className="flex flex-col items-center px-2">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
        ></CollectionCard>
      ))}
    </div>
  );
};

export default ProjectCollection;
