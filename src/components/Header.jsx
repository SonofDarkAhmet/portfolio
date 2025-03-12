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

const ButtonTypography = styled(Typography)({
  fontWeight: "400",
});

function Header({ refs }) {
  const appBarRef = useRef(null);
  const [boxSize, setBoxSize] = useState({ width: "auto", height: "auto" });

  useEffect(() => {
    if (appBarRef.current) {
      const { offsetWidth, offsetHeight } = appBarRef.current;
      setBoxSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  function handleHomeSubmit() {
    refs.profileSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleProjectsSubmit() {
    refs.projectsSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleSkillsSubmit() {
    refs.skillsSection.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleContactSubmit() {
    refs.contactSection.current.scrollIntoView({ behavior: "smooth" });
  }

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
            <StyledButton variant="outlined" onClick={handleHomeSubmit}>
              <ButtonTypography>Home</ButtonTypography>
            </StyledButton>
            <StyledButton variant="outlined" onClick={handleProjectsSubmit}>
              <ButtonTypography>Projects</ButtonTypography>
            </StyledButton>
            <StyledButton variant="outlined" onClick={handleSkillsSubmit}>
              <ButtonTypography>Skills</ButtonTypography>
            </StyledButton>
            <StyledButton variant="outlined" onClick={handleContactSubmit}>
              <ButtonTypography>Contact</ButtonTypography>
            </StyledButton>
          </StyledStack>
        </StyledToolbar>
      </StyledAppbar>
    </Box>
  );
}

export default Header;
