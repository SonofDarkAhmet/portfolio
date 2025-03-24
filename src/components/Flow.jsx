import { profilePic } from "../data";
import { Suspense } from "react";
import { Await } from "react-router-dom";
import { Stack, Divider, styled } from "@mui/material";
import Profile from "../pages/Profile";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";

const FlowStack = styled(Stack)({
  flex: 4,
  justifyContent: "center",
  alignContent: "center",
});

function Flow({ refs }) {
  return (
    <FlowStack spacing={2}>
      <Profile profileImg={profilePic} ref={refs.profileSection} />
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        aria-hidden="true"
      />
      <Projects ref={refs.projectsSection} />
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        aria-hidden="true"
      />
      <Skills ref={refs.skillsSection} />
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        aria-hidden="true"
      />
      <Contact ref={refs.contactSection} />
      <Footer />
    </FlowStack>
  );
}

export default Flow;
