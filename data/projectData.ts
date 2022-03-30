const projects = [
  {
    filter: ["featured", "frontend-mentor"],
    title: "Crowdfunding Product App",
    description:
      "Fictional Crowdfunding Product App built with React, Typescript, and Tailwindcss",
    technologies: ["React", "Typescript", "Tailwindcss"],
    imgPath: "/projects/crowdfunding-product-app.png",
    githubUrl: "https://github.com/kennyputman/crowdfunding-product-page",
    websiteUrl: "https://crowdfunding-product-app-kennyputman.netlify.app/",
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
    title: "Meet Landing Page",
    description: "Landing Page for a fictional Chat app built with html/css",
    technologies: ["CSS"],
    imgPath: "/projects/meet-landing-page.png",
    githubUrl: "https://github.com/kennyputman/meet-landing-page",
    websiteUrl: "https://kennyputman.github.io/meet-landing-page/",
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
  {
    filter: ["short", "frontend-mentor"],
    title: "Accordion Card",
    description: "Accordion dropdown menu using html, css, and JS",
    technologies: ["CSS", "JS"],
    imgPath: "/projects/accordion-card.png",
    githubUrl: "https://github.com/kennyputman/faq-accordion-card",
    websiteUrl: "https://kennyputman.github.io/faq-accordion-card/",
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
];

const projectData = projects.map((project, index) => ({
  id: index,
  ...project,
}));

export default projectData;
