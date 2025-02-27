import { Suspense } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid2 as Grid,
  Divider,
} from "@mui/material";
import { Await, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import { getImgLink } from "../utils";

const theme = createTheme({
  palette: {
    background: { default: "#F7F5F4", paper: "#F7F5F4" },
  },
  typography: {
    fontFamily: "'Graphik Web', sans-serif",
    fontWeight: 400,
    fontStyle: "normal",
    fontStretch: "normal",
    allVariants: {
      fontVariantNumeric: "oldstyle-nums",
      fontVariantLigatures: "common-ligatures",
    },
  },
});

const styles = {
  gridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "7rem",
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "80vh",
  },
};

export async function loader() {
  const profileImgPromise = getImgLink(import.meta.env.VITE_PATH_PROFILE_PIC);
  const eaLogoImgPromise = getImgLink(import.meta.env.VITE_PATH_EA_LOG);

  return {
    profileImgPromise: profileImgPromise,
    eaLogoImgPromise: eaLogoImgPromise,
  };
}

function Layout() {
  const promisedData = useLoaderData();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Grid container spacing={1} style={styles.gridContainer}>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid style={styles.gridItem}>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={promisedData.profileImgPromise}>
              {(profileImg) => {
                return <Home profileImg={profileImg} />;
              }}
            </Await>
          </Suspense>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid style={styles.gridItem}>
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={promisedData.eaLogoImgPromise}>
              {(eaLogoImg) => <Skills eaLogoImg={eaLogoImg} />}
            </Await>
          </Suspense>
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid style={styles.gridItem}>
          <Home />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
