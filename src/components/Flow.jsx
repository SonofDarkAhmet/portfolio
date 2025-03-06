import { Suspense } from "react";
import { Await } from "react-router-dom";
import { Stack, Divider, styled } from "@mui/material";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

const FlowStack = styled(Stack)({
  flex: 4,
  justifyContent: "center",
  alignContent: "center",
});

function Flow({ flowData }) {
  return (
    <FlowStack
      divider={<Divider orientation="horizontal" variant="middle" flexItem />}
      spacing={2}
    >
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={flowData.profileImgPromise}>
          {(profileImg) => {
            return <Home profileImg={profileImg} />;
          }}
        </Await>
      </Suspense>

      <Projects />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={flowData.eaLogoImgPromise}>
          {(eaLogoImg) => <Skills eaLogoImg={eaLogoImg} />}
        </Await>
      </Suspense>

      <Contacts />
    </FlowStack>
  );
}

export default Flow;
