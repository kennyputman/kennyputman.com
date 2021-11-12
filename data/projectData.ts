const projects = [
  {
    filter: ["featured", "frontend-mentor"],
    title: "Product Feedback Page",
    description:
      "Product feedback and prioritization forum build with Typescript, Express, GraphQL, and Apollo",
    technologies: ["React", "Typescript", "GraphQL"],
    imgPath: "/projects/product-feedback-app.jpg",
    githubUrl: "https://github.com/kennyputman/product-feedback-app",
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
  {
    filter: ["short", "frontend-mentor"],
    title: "Oder Summary Component",
    description: "Order summary component built with pure html/css",
    technologies: ["CSS"],
    imgPath: "/projects/order-summary-component.png",
    githubUrl: "https://github.com/kennyputman/order-summary-component",
    websiteUrl: "https://kennyputman.github.io/order-summary-component/",
  },
  {
    filter: ["short", "the-odin-project"],
    title: "Recipe Blog",
    description: "Recipe blog built with pure html/css",
    technologies: ["HTML", "CSS"],
    imgPath: "/projects/top-recipe-blog.png",
    githubUrl: "https://github.com/kennyputman/odin-recipes",
    websiteUrl: "https://kennyputman.github.io/odin-recipes/",
  },
  {
    filter: ["short", "the-odin-project"],
    title: "Catena Club",
    description:
      "Landing Page for a fictional wine club built with vanilla HTML/CSS ",
    technologies: ["HTML", "CSS"],
    imgPath: "/projects/top-catena-club.png",
    githubUrl: "https://github.com/kennyputman/odin-landing-page",
    websiteUrl: "https://kennyputman.github.io/odin-landing-page/",
  },
];

const projectData = projects.map((project, index) => ({
  id: index,
  ...project,
}));

export default projectData;
