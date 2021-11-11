const projects = [
  {
    filter: ["featured", "frontend-mentor"],
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
    filter: ["featured"],
    title: "Full Stack Open",
    description:
      "Completed The University of Helsinki's full stack web development course. Topics covered included: MERN, GraphQL, Typescript, CI/CD, and Docker",
    technologies: ["MERN", "GraphQL", "Typescipt"],
    imgPath: "/projects/certificate-fullstack.png",
    githubUrl: "https://github.com/kennyputman/full_stack_open_2021",
    websiteUrl: "https://fullstackopen.com/en/",
  },
];

const projectData = projects.map((project, index) => ({
  id: index,
  ...project,
}));

export default projectData;
