import React from "react";
import { Box, styled } from "@mui/material";

import SkillWall from "../components/SkillWall";
import SectionTitle from "../components/SectionTitle";

const SkillWallBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px 80px 100px",
  maxWidth: "var(--content-max)",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    padding: "20px 24px 60px",
  },
}));

const SkillsGridWrap = styled(Box)({
  marginTop: "24px",
});

type SkillsProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
};

function Skills({ sectionRef }: SkillsProps): React.ReactElement {
  return (
    <SkillWallBox id="skills" ref={sectionRef}>
      <SectionTitle variant="h4">Skills</SectionTitle>
      <SkillsGridWrap>
        <SkillWall />
      </SkillsGridWrap>
    </SkillWallBox>
  );
}

export default Skills;
