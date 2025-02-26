import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Grid2 as Grid,
  Divider,
  Box,
} from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import Skills from "../pages/Skills";

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

function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      <Grid container spacing={1} style={styles.gridContainer}>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid style={styles.gridItem}>
          <Home />
        </Grid>
        <Grid size={12}>
          <Divider />
        </Grid>
        <Grid style={styles.gridItem}>
          <Skills />
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
