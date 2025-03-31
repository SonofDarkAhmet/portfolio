import React from "react";
import { Box, styled } from "@mui/material";

import SkillWall from "../components/SkillWall";
import SectionTitle from "../components/SectionTitle";

const SkillWallBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

type SkillsProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
};

function Skills({ sectionRef }: SkillsProps): React.ReactElement {
  return (
    <SkillWallBox ref={sectionRef}>
      <SectionTitle variant="h4">Skills</SectionTitle>
      <SkillWall />
    </SkillWallBox>
  );
}

export default Skills;
