import { Suspense } from "react";
import { Await } from "react-router-dom";
import { Stack, Divider, styled } from "@mui/material";
import Profile from "../pages/Profile";
import Skills from "../pages/Skills";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Footer from "./Footer";

const FlowStack = styled(Stack)({
  flex: 4,
  justifyContent: "center",
  alignContent: "center",
});

function Flow({ flowData, refs }) {
  return (
    <FlowStack spacing={2}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={flowData.profileImgPromise}>
          {(profileImg) => {
            return (
              <Profile profileImg={profileImg} ref={refs.profileSection} />
            );
          }}
        </Await>
      </Suspense>

      <Divider orientation="horizontal" variant="middle" flexItem />

      <Projects ref={refs.projectsSection} />

      <Divider orientation="horizontal" variant="middle" flexItem />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={flowData.eaLogoImgPromise}>
          {(eaLogoImg) => (
            <Skills eaLogoImg={eaLogoImg} ref={refs.skillsSection} />
          )}
        </Await>
      </Suspense>

      <Divider orientation="horizontal" variant="middle" flexItem />

      <Contact ref={refs.contactSection} />
      <Footer />
    </FlowStack>
  );
}

export default Flow;
