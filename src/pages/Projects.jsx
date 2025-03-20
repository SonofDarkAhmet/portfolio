import { Outlet } from "react-router-dom";
import { Box, styled } from "@mui/material";
import SectionTitle from "../components/SectionTitle";

const ProjectBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

function Projects(props) {
  return (
    <ProjectBox ref={props.ref}>
      <SectionTitle variant="h4">Projects</SectionTitle>
      <Outlet />
    </ProjectBox>
  );
}

export default Projects;
