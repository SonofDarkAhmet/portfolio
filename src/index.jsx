import "./index.css";
import { createRoot } from "react-dom/client";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import App from "./App";

let theme = createTheme({
  palette: {
    background: { default: "#000" },
    secondary: {
      main: "#f0f2f5", // Change this to your desired secondary color
      light: "#ffffff", // Optional: lighter shade of secondary color
      dark: "#D4D4D4", // Optional: darker shade of secondary color
      contrastText: "#ffffff", // Optional: text color to use on secondary color
    },
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
