import React from "react";
import { useSearchParams } from "react-router";
import { Box, styled } from "@mui/material";

import SectionTitle from "../components/SectionTitle";
import ProjectList from "../components/projects/ProjectList";
import ProjectModal from "../components/projects/ProjectModal";
import { projects, sectionTitles } from "../data";

const ProjectBox = styled(Box)(({ theme }) => ({
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

type ProjectsProps = {
  ref: React.RefObject<HTMLDivElement | null>;
};

export default function Projects({ ref }: ProjectsProps): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();

  const openId = searchParams.get("project");
  const openProject = openId
    ? projects.find((p) => p.id === Number(openId)) ?? null
    : null;

  const handleOpen = (id: number) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.set("project", String(id));
        return next;
      },
      { replace: true, preventScrollReset: true }
    );
  };

  const handleClose = () => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete("project");
        return next;
      },
      { replace: true, preventScrollReset: true }
    );
  };

  return (
    <ProjectBox id="projects" ref={ref}>
      <SectionTitle variant="h4">{sectionTitles.projects}</SectionTitle>
      <ProjectList onOpen={handleOpen} />
      <ProjectModal project={openProject} onClose={handleClose} />
    </ProjectBox>
  );
}
