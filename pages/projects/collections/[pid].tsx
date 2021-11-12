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
    <div className="pt-5">
      <h1 className="mb-16 text-3xl text-center font-bold">
        {collection?.title}
      </h1>
      <div className="mb-32 flex flex-col items-center">
        {featuredProjects.map((project) => (
          <ProjectPreview key={project.id} project={project}></ProjectPreview>
        ))}
      </div>
    </div>
  );
};

export default Collection;
