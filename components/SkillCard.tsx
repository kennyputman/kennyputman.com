import Image from "next/image";

type Props = { skill: string; skillImg: string };

const SkillCard = ({ skill, skillImg }: Props) => {
  return (
    <>
      <div>
        <Image src={skillImg} alt="Dummy Image" width={50} height={50} />
        <p>{skill}</p>
      </div>
    </>
  );
};

export default SkillCard;
