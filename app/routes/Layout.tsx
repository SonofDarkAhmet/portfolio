import { useRef } from "react";
import { Box, Stack, styled } from "@mui/material";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Flow from "../components/Flow";
import Rightbar from "../components/Rightbar";

const LayoutStack = styled(Stack)({
  flexDirection: "row",
  // backgroundColor: "#0a0c10",
  zIndex: 0,
});

type SectionRefs = {
  profileSection: React.RefObject<HTMLDivElement | null>;
  projectsSection: React.RefObject<HTMLDivElement | null>;
  skillsSection: React.RefObject<HTMLDivElement | null>;
  contactSection: React.RefObject<HTMLDivElement | null>;
};

function Layout(): React.ReactElement {
  const profileSection = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const skillsSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  const refs: SectionRefs = {
    profileSection,
    projectsSection,
    skillsSection,
    contactSection,
  };

  return (
    <Box>
      <Header refs={refs} />
      <LayoutStack>
        <Sidebar />
        <Flow refs={refs} />
        <Rightbar />
      </LayoutStack>
    </Box>
  );
}

export default Layout;
