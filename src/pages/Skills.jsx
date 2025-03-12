import { Box, Typography, styled } from "@mui/material";
import SkillWall from "../components/SkillWall";
import SectionTitle from "../components/SectionTitle";

const SkillWallBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

// const SectionTitle = styled(Typography)({
//   display: "block",
//   width: "100%",
//   fontWeight: "300",
// });

function Skills(props) {
  const eaLogoImg = props.eaLogoImg;

  return (
    <SkillWallBox ref={props.ref}>
      <SectionTitle variant="h4">Skills</SectionTitle>
      <SkillWall eaLogoImg={eaLogoImg} />
    </SkillWallBox>
  );
}

export default Skills;
