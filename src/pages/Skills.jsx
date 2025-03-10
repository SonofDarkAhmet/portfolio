import { Box, styled } from "@mui/material";
import SkillWall from "../components/SkillWall";

const SkillWallBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  minHeight: "100vh",
});

function Skills(props) {
  const eaLogoImg = props.eaLogoImg;

  return (
    <SkillWallBox>
      <SkillWall eaLogoImg={eaLogoImg} />
    </SkillWallBox>
  );
}

export default Skills;
