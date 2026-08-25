import React from "react";
import { Box, styled } from "@mui/material";

import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import { experience } from "../data";

const ExperienceBox = styled(Box)(({ theme }) => ({
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

const ExperienceGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "16px",
  marginTop: "24px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr 1fr",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

type ExperienceProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
};

export default function Experience({
  sectionRef,
}: ExperienceProps): React.ReactElement {
  return (
    <ExperienceBox id="experience" ref={sectionRef}>
      <SectionTitle variant="h4">Experience</SectionTitle>
      <ExperienceGrid>
        {experience.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </ExperienceGrid>
    </ExperienceBox>
  );
}
