import { Box, Typography, styled } from "@mui/material";
import ProjectList from "../components/ProjectList";

const ProjectBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const SectionTitle = styled(Typography)({
  display: "block",
  width: "100%",
  textDecoration: "underline",
  color: "#885245",
});

function Projects() {
  return (
    <ProjectBox>
      <SectionTitle variant="h5">Projects</SectionTitle>
      <ProjectList />
    </ProjectBox>
  );
}

export default Projects;
