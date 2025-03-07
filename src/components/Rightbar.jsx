import React from "react";

import { Box, styled } from "@mui/material";

const RightBarBox = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "transparent",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function Rightbar() {
  return <RightBarBox />;
}

export default Rightbar;
