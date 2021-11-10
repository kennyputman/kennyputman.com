import SkillCard from "./SkillCard";

const Skills = () => {
  const skillsData = [
    { skill: "Typescript", skillImg: "/logos/typescript.svg" },
    { skill: "node.js", skillImg: "/logos/nodejs.svg" },
    { skill: "C#", skillImg: "/logos/csharp.svg" },
    { skill: "ASP.NET", skillImg: "/logos/dotnet.png" },
    { skill: "React", skillImg: "/logos/react.svg" },
    { skill: "GraphQL", skillImg: "/logos/graphql.svg" },
    { skill: "Tailwind", skillImg: "/logos/tailwind.svg" },
    { skill: "Postgres", skillImg: "/logos/postgres.svg" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mx-auto ">
        Skills
        <span className="w-10 border-b-2 "></span>
      </h2>
      <p className="mb-4 dark:text-gray-dark-soft text-gray-light-soft">
        Here are the tools I work with the most
      </p>
      <div className="flex flex-col items-start mb-7">
        <div className="grid sm:grid-cols-4 sm:grid-rows-2 gap-4 grid-rows-4 grid-cols-2">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.skill}
              skill={skill.skill}
              skillImg={skill.skillImg}
            ></SkillCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
