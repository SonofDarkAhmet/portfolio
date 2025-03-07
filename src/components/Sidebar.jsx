import { Box, styled } from "@mui/material";

const SideBarBox = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundColor: "transparent",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Sidebar = () => {
  return <SideBarBox />;
};

export default Sidebar;
