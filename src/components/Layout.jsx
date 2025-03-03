import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { Box, Divider, Stack, styled } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import { getImgLink } from "../utils";

export async function loader() {
  const profileImgPromise = getImgLink(import.meta.env.VITE_PATH_PROFILE_PIC);
  const eaLogoImgPromise = getImgLink(import.meta.env.VITE_PATH_EA_LOG);

  return {
    profileImgPromise: profileImgPromise,
    eaLogoImgPromise: eaLogoImgPromise,
  };
}

const MainBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

function Layout() {
  const promisedData = useLoaderData();

  return (
    <MainBox>
      <Stack
        direction="column"
        justifyContent="center"
        alignContent="center"
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        <Header />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={promisedData.profileImgPromise}>
            {(profileImg) => {
              return <Home profileImg={profileImg} />;
            }}
          </Await>
        </Suspense>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={promisedData.eaLogoImgPromise}>
            {(eaLogoImg) => <Skills eaLogoImg={eaLogoImg} />}
          </Await>
        </Suspense>
        <Footer />
      </Stack>
    </MainBox>
  );
}

export default Layout;
