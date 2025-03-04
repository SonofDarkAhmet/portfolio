import React from "react";

import { Box, styled } from "@mui/material";

const RightBarBox = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "red",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

function Rightbar() {
  return <RightBarBox>Rightbar</RightBarBox>;
}

export default Rightbar;
