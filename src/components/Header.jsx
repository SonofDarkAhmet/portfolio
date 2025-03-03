import React, { useRef, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  ButtonGroup,
  Button,
  Typography,
  styled,
} from "@mui/material";

const StyledAppbar = styled(AppBar)({
  position: "static",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  flexShrink: "wrap",
});

const StyledButtonGroup = styled(ButtonGroup)({
  flexShrink: "wrap",
  borderRadius: "1em",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
});

const StyledButton = styled(Button)({
  flexShrink: 1,
  color: "#37474f",
  border: "none",
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
    <StyledAppbar
      component="nav"
      color="transparent"
      elevation={0}
      ref={appBarRef}
    >
      <StyledToolbar>
        <StyledButtonGroup>
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
        </StyledButtonGroup>
      </StyledToolbar>
    </StyledAppbar>
  );
}

export default Header;
