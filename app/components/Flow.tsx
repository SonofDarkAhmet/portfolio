import React from "react";
import { profilePic } from "../data";
import { Stack, Divider, styled } from "@mui/material";
import Profile from "../routes/Profile";
import Skills from "../routes/Skills";
import Projects from "../routes/Projects";
import Contact from "../routes/Contact";
import Footer from "./Footer";

const FlowStack = styled(Stack)({
  flex: 4,
  justifyContent: "center",
  alignContent: "center",
  zIndex: 1,
});

type SectionRefs = {
  profileSection: React.RefObject<HTMLDivElement | null>;
  projectsSection: React.RefObject<HTMLDivElement | null>;
  skillsSection: React.RefObject<HTMLDivElement | null>;
  contactSection: React.RefObject<HTMLDivElement | null>;
};

type FlowProps = {
  refs: SectionRefs;
};

export default function Flow({ refs }: FlowProps): React.ReactElement {
  return (
    <FlowStack spacing={2}>
      <Profile profileImg={profilePic[0]} ref={refs.profileSection} />
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
      <Skills sectionRef={refs.skillsSection} />
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        aria-hidden="true"
      />
      <Contact sectionRef={refs.contactSection} />
      <Footer />
    </FlowStack>
  );
}
