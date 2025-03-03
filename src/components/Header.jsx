import React, { useRef, useEffect, useState } from "react";
import {
  Box,
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

const styles = {
  toolBar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexShrink: "wrap",
  },
  buttonGroup: {
    flexShrink: "wrap",
    borderRadius: "1em",
    boxShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
  },
  buttons: {
    flexShrink: 1,
    color: "#37474f",
    border: "none",
  },
};

const HeaderBox = styled(Box)({
  flex: 1,
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
    <HeaderBox width={boxSize.width} height={boxSize.height}>
      <StyledAppbar
        component="nav"
        color="transparent"
        elevation={0}
        ref={appBarRef}
      >
        <Toolbar style={styles.toolBar}>
          <ButtonGroup style={styles.buttonGroup}>
            <Button variant="outlined" style={styles.buttons}>
              <Typography>Home</Typography>
            </Button>
            <Button variant="outlined" style={styles.buttons}>
              <Typography>Skills</Typography>
            </Button>
            <Button variant="outlined" style={styles.buttons}>
              <Typography>Projects</Typography>
            </Button>
            <Button variant="outlined" style={styles.buttons}>
              <Typography>Contacts</Typography>
            </Button>
          </ButtonGroup>
        </Toolbar>
      </StyledAppbar>
    </HeaderBox>
  );
}

export default Header;
