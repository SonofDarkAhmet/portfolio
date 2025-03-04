import React, { useRef, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  Typography,
  styled,
  Box,
} from "@mui/material";

const StyledAppbar = styled(AppBar)({
  position: "fixed",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  flexShrink: "wrap",
});

const StyledStack = styled(Stack)({
  flexDirection: "row",
  flexShrink: "wrap",
  backgroundColor: "transparent",
  paddingLeft: "5px",
  paddingRight: "5px",
  borderRadius: "1em",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
});

const StyledButton = styled(Button)({
  flexShrink: 1,
  color: "#24262e",
  border: "none",
  borderRadius: "1em",
});

function Header() {
  const appBarRef = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    if (appBarRef.current) {
      const { offsetWidth, offsetHeight } = appBarRef.current;
      setBoxSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  return (
    <Box sx={{ height: boxSize.height, width: boxSize.width }}>
      <StyledAppbar
        component="nav"
        color="transparent"
        elevation={0}
        ref={appBarRef}
      >
        <StyledToolbar>
          <StyledStack>
            <StyledButton variant="outlined">
              <Typography>Home</Typography>
            </StyledButton>
            <StyledButton variant="outlined">
              <Typography>Skills</Typography>
            </StyledButton>
            <StyledButton variant="outlined">
              <Typography>Projects</Typography>
            </StyledButton>
            <StyledButton variant="outlined">
              <Typography>Contacts</Typography>
            </StyledButton>
          </StyledStack>
        </StyledToolbar>
      </StyledAppbar>
    </Box>
  );
}

export default Header;
