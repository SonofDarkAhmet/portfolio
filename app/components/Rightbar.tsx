import React from "react";
import { Box, styled } from "@mui/material";

const RightBarBox = styled(Box)(({ theme }) => ({
  flex: 0.5,
  backgroundColor: "transparent",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  zIndex: 1,
}));

function Rightbar(): React.ReactElement {
  return <RightBarBox />;
}

export default Rightbar;
