import { Suspense } from "react";
import { Await } from "react-router-dom";
import { Stack, Box, Divider, styled } from "@mui/material";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "./Projects";
import Contacts from "./Contacts";

const FlowStack = styled(Stack)({
  flex: 4,
  justifyContent: "center",
  alignContent: "center",
});

function Flow({ data }) {
  return (
    <FlowStack
      divider={<Divider orientation="horizontal" variant="middle" flexItem />}
      spacing={2}
    >
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={data.profileImgPromise}>
          {(profileImg) => {
            return <Home profileImg={profileImg} />;
          }}
        </Await>
      </Suspense>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={data.eaLogoImgPromise}>
          {(eaLogoImg) => <Skills eaLogoImg={eaLogoImg} />}
        </Await>
      </Suspense>

      <Projects />

      <Contacts />
    </FlowStack>
  );
}

export default Flow;
