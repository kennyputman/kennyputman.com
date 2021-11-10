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
      <h2 className="text-2xl font-semibold mx-auto text-center">Skills</h2>
      <p className="text-center mb-4">
        Here are the tools I work with the most
      </p>
      <div className="flex flex-col items-center mb-7">
        <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 grid-rows-4 grid-cols-2">
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
