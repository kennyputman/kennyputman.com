import Image from "next/image";

type Props = { skill: string; skillImg: string };

const SkillCard = ({ skill, skillImg }: Props) => {
  return (
    <>
      <div className=" bg-white dark:bg-fx-dark-second p-3 w-36 rounded-md flex flex-col items-center gap-2 shadow-lg">
        <Image
          src={skillImg}
          alt={skill}
          width={35}
          height={35}
          className="mx-auto"
        />
        <p className="font-semibold">{skill}</p>
      </div>
    </>
  );
};

export default SkillCard;
