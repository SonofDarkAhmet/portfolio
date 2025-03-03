import "./index.css";
import { createRoot, CssBaseline } from "react-dom/client";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import App from "./App";

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
