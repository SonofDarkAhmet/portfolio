import { Box, styled } from "@mui/material";
import SkillWall from "../components/SkillWall";
import SectionTitle from "../components/SectionTitle";

const SkillWallBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

function Skills(props) {
  return (
    <SkillWallBox ref={props.ref}>
      <SectionTitle variant="h4">Skills</SectionTitle>
      <SkillWall />
    </SkillWallBox>
  );
}

export default Skills;
