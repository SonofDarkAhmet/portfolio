import { useLoaderData } from "react-router-dom";
import { Box, Stack, styled } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Flow from "./Flow";
import Rightbar from "./Rightbar";
import Footer from "./Footer";

import { getImgLink } from "../utils";

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

  return (
    <LayoutBox>
      <Header />
      <LayoutStack>
        <Sidebar />
        <Flow data={promisedData} />
        <Rightbar />
      </LayoutStack>
      <Footer />
    </LayoutBox>
  );
}

export default Layout;
