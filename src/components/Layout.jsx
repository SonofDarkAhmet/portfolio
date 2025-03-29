import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { Box, Stack, styled } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Flow from "./Flow";
import Rightbar from "./Rightbar";

const LayoutStack = styled(Stack)({
  flexDirection: "row",
});

function Layout() {
  const promisedData = useLoaderData();
  const profileSection = useRef(null);
  const projectsSection = useRef(null);
  const skillsSection = useRef(null);
  const contactSection = useRef(null);

  const refs = {
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
