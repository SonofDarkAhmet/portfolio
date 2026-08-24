import { useRef, useState } from "react";
import { styled, Box } from "@mui/material";

import Header from "../components/Header";
import Flow from "../components/Flow";
import type { SectionRefs } from "../types";


const LayoutBox = styled(Box)({
  display: "grid",
  justifyContent: "center",
  alignContent: "center"
});

function Layout(): React.ReactElement {
  const profileSection = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const skillsSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  const [appBarHeight, setAppBarHeight] = useState(0);

  const refs: SectionRefs = {
    profileSection,
    experienceSection,
    projectsSection,
    skillsSection,
    contactSection,
  };

  return (
    <LayoutBox>
      <Header refs={refs} onHeightChange={setAppBarHeight} />
      <Flow refs={refs} appBarHeight={appBarHeight} />
    </LayoutBox>
  );
}

export default Layout;
