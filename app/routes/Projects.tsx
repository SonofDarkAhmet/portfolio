import React from "react";
import { Outlet } from "react-router";
import { Box, styled } from "@mui/material";

import SectionTitle from "../components/SectionTitle";

const ProjectBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

type ProjectsProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

export default function Projects({ ref }: ProjectsProps): React.ReactElement {
  return (
    <ProjectBox ref={ref}>
      <SectionTitle variant="h4">Projects</SectionTitle>
      <Outlet context={ref} />
    </ProjectBox>
  );
}
