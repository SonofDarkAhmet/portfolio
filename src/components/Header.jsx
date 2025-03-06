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
  backgroundColor: "rgb(240, 242, 245)",
  padding: "5px 25px",
  borderRadius: "2em",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
});

const StyledButton = styled(Button)({
  flexShrink: 1,
  color: "#24262e",
  border: "none",
  borderRadius: "1em",
});

const ButtonTypo = styled(Typography)({
  fontWeight: "Bold",
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
              <ButtonTypo>Home</ButtonTypo>
            </StyledButton>
            <StyledButton variant="outlined">
              <ButtonTypo>Skills</ButtonTypo>
            </StyledButton>
            <StyledButton variant="outlined">
              <ButtonTypo>Projects</ButtonTypo>
            </StyledButton>
            <StyledButton variant="outlined">
              <ButtonTypo>Contacts</ButtonTypo>
            </StyledButton>
          </StyledStack>
        </StyledToolbar>
      </StyledAppbar>
    </Box>
  );
}

export default Header;
