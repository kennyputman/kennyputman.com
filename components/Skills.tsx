import SkillCard from "./SkillCard";

const Skills = () => {
  const skillsData = [
    { skill: "Typescript", skillImg: "/logos/typescript.svg" },
    { skill: "node.js", skillImg: "/logos/nodejs.svg" },
    { skill: "C#", skillImg: "/logos/csharp.svg" },
    { skill: "ASP.NET", skillImg: "/logos/dotnet.png" },
    { skill: "React", skillImg: "/logos/react.svg" },
    { skill: "GraphQL", skillImg: "/logos/graphql.svg" },
    { skill: "TailwindCSS", skillImg: "/logos/tailwind.svg" },
    { skill: "Postgres", skillImg: "/logos/postgres.svg" },
  ];

  return (
    <div>
      <h2 className="text-xl">Skills</h2>
      <p>Here are the tools I work with the most</p>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.skill}
            skill={skill.skill}
            skillImg={skill.skillImg}
          ></SkillCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
