import { Box, Typography, styled } from "@mui/material";
import ProjectList from "../components/ProjectList";
import SectionTitle from "../components/SectionTitle";

const ProjectBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
});

function Projects() {
  return (
    <ProjectBox>
      <SectionTitle variant="h4">Projects</SectionTitle>
      <ProjectList />
    </ProjectBox>
  );
}

export default Projects;
