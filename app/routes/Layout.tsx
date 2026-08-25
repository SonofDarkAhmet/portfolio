import { useRef, useState } from "react";
import { useOutletContext } from "react-router";
import { styled, Box } from "@mui/material";

import Header from "../components/Header";
import Flow from "../components/Flow";
import type { SectionRefs } from "../types";
import type { ThemeContext } from "../root";


const LayoutBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default function Layout(): React.ReactElement {
  const profileSection = useRef<HTMLDivElement>(null);
  const experienceSection = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const skillsSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  const [appBarHeight, setAppBarHeight] = useState(0);
  const { mode, toggle } = useOutletContext<ThemeContext>();

  const refs: SectionRefs = {
    profileSection,
    experienceSection,
    projectsSection,
    skillsSection,
    contactSection,
  };

  return (
    <LayoutBox>
      <Header
        refs={refs}
        onHeightChange={setAppBarHeight}
        themeMode={mode}
        onToggleTheme={toggle}
      />
      <Flow refs={refs} appBarHeight={appBarHeight} />
    </LayoutBox>
  );
}
