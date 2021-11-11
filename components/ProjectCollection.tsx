import React from "react";
import Image from "next/image";
import CollectionCard from "./CollectionCard";
import CollectionData from "../data/collectionsData";

const ProjectCollection = () => {
  return (
    <div className="flex flex-col items-center px-2">
      {CollectionData.map((collection) => (
        <CollectionCard
          key={collection.id}
          collection={collection}
        ></CollectionCard>
      ))}
    </div>
  );
};

export default ProjectCollection;
