import { useRouter } from "next/router";
import projectData from "../../../data/projectData";
import collectionsData from "../../../data/collectionsData";
import { ProjectCard } from "../../../components";

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
      <h1 className="mb-5 text-3xl text-center font-bold">
        {collection?.title}
      </h1>
      <div className="mb-32">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Collection;
