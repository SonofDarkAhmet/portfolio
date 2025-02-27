import SkillWall from "../components/SkillWall";

function Skills(props) {
  const eaLogoImg = props.eaLogoImg;
  console.log(eaLogoImg);

  return <SkillWall eaLogoImg={eaLogoImg} />;
}

export default Skills;
