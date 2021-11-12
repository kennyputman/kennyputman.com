import { useRouter } from "next/router";
import projectData from "../../../data/projectData";
import collectionsData from "../../../data/collectionsData";
import { ProjectCard } from "../../../components";
import ProjectPreview from "../../../components/ProjectPreview";

const Collection = () => {
  const router = useRouter();
  const { pid } = router.query;

  const featuredProjects = projectData.filter((project) =>
    project.filter?.includes(String(pid))
  );

  const collection = collectionsData.find(
    (collection) => collection.nextSlug === pid
  );

  return (
    <div className="pt-5 flex flex-col items-center">
      <h1 className="mb-16 text-3xl text-center font-bold">
        {collection?.title}
      </h1>
      <div className="mb-32 p-2 gap-8 grid grid-col-1 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectPreview key={project.id} project={project}></ProjectPreview>
        ))}
      </div>
    </div>
  );
};

export default Collection;
