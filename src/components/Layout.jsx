import { useLoaderData } from "react-router-dom";
import { Box, Stack, styled } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Flow from "./Flow";
import Rightbar from "./Rightbar";
import Footer from "./Footer";
import { getImgLink } from "../utils";
import { useRef } from "react";

export async function loader() {
  const profileImgPromise = getImgLink(import.meta.env.VITE_PATH_PROFILE_PIC);
  const eaLogoImgPromise = getImgLink(import.meta.env.VITE_PATH_EA_LOG);

  return {
    profileImgPromise: profileImgPromise,
    eaLogoImgPromise: eaLogoImgPromise,
  };
}

const LayoutBox = styled(Box)({});

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
    <LayoutBox>
      <Header refs={refs} />
      <LayoutStack>
        <Sidebar />
        <Flow flowData={promisedData} refs={refs} />
        <Rightbar />
      </LayoutStack>
      <Footer />
    </LayoutBox>
  );
}

export default Layout;
