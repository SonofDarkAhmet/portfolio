import "./index.css";
import { createRoot, CssBaseline } from "react-dom/client";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import App from "./App";

let theme = createTheme({
  palette: {
    background: { default: "#f0f2f5" },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});

theme = responsiveFontSizes(theme);

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
