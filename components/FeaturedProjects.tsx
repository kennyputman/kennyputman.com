import ProjectCard from "./ProjectCard";

const projectData = [
  {
    pid: 1,
    title: "Product Feedback Page",
    description:
      "Product feedback and prioritization forum build with Typescript, Express, GraphQL, and Apollo",
    technologies: ["React", "Typescript", "GraphQL"],
    imgPath: "/projects/product-feedback-app.jpg",
    githubUrl:
      "https://github.com/kennyputman/full_stack_open_2021/kennyputman/product-feedback-app",
    websiteUrl:
      "https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6",
  },
  {
    pid: 2,
    title: "Full Stack Open",
    description:
      "Completed The University of Helsinki's full stack web development course. Topics covered included: MERN, GraphQL, Typescript, CI/CD, and Docker",
    technologies: ["MERN", "GraphQL", "Typescipt"],
    imgPath: "/projects/certificate-fullstack.png",
    githubUrl: "https://github.com/kennyputman/full_stack_open_2021",
    websiteUrl: "https://fullstackopen.com/en/",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="mb-32">
      <div className="mb-16">
        <h2 className="text-3xl font-semibold mx-auto ">
          Projects
          <span className="w-10 border-b-2 "></span>
        </h2>
        <p className=" dark:text-gray-dark-soft text-gray-light-soft">
          Some things I have been working on
        </p>
      </div>
      {projectData.map((project) => (
        <ProjectCard key={project.pid} project={project}></ProjectCard>
      ))}
    </div>
  );
};

export default FeaturedProjects;
