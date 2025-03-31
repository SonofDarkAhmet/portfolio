import React from "react"
import { Box, styled } from "@mui/material";

const SideBarBox = styled(Box)(({ theme }) => ({
  flex: 0.5,
  backgroundColor: "transparent",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  zIndex: 1,
}));

const Sidebar = (): React.ReactElement => {
  return <SideBarBox />;
};

export default Sidebar;
