import React from "react";
import { profilePic } from "../data";
import { Box, Divider, styled } from "@mui/material";
import Profile from "../routes/Profile";
import Experience from "../routes/Experience";
import Skills from "../routes/Skills";
import Projects from "../routes/Projects";
import Contact from "../routes/Contact";
import Footer from "./Footer";
import type { SectionRefs } from "../types";

function FlowDivider(): React.ReactElement {
  return (
    <Divider orientation="horizontal" variant="middle" flexItem aria-hidden="true" />
  );
}

const FlowStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  zIndex: 1,
});

type FlowProps = {
  refs: SectionRefs;
  appBarHeight: number;
};

export default function Flow({
  refs,
  appBarHeight,
}: FlowProps): React.ReactElement {
  return (
    <FlowStack id="test" spacing={2}>
      <Profile
        profileImg={profilePic[0]}
        ref={refs.profileSection}
        contactRef={refs.contactSection}
        appBarHeight={appBarHeight}
      />
      <FlowDivider/>
      <Experience sectionRef={refs.experienceSection} />
      <FlowDivider/>
      <Projects ref={refs.projectsSection} />
      <FlowDivider/>
      <Skills sectionRef={refs.skillsSection} />
      <FlowDivider/>
      <Contact sectionRef={refs.contactSection} />
      <Footer />
    </FlowStack>
  );
}
