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
  top: "0%",
  left: "50%",
  transform: "translateX(-50%)",
  width: "auto",
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

const StyledStack = styled(Stack)({
  flexDirection: "row",
  flexWrap: "wrap",
  backgroundColor: "rgb(240, 242, 245)",
  padding: "5px 25px",
  borderRadius: "2em",
  boxShadow:
    "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
});

const StyledButton = styled(Button)({
  flexShrink: 1,
  color: "#24262e",
  borderRadius: "1em",
});

const ButtonTypography = styled(Typography)({
  fontWeight: 400,
});

type SectionRefs = {
  profileSection: React.RefObject<HTMLDivElement | null>;
  projectsSection: React.RefObject<HTMLDivElement | null>;
  skillsSection: React.RefObject<HTMLDivElement | null>;
  contactSection: React.RefObject<HTMLDivElement | null>;
};

type HeaderProps = {
  refs: SectionRefs;
};

type BoxSize = {
  width: number | string;
  height: number | string;
};

function Header({ refs }: HeaderProps): React.ReactElement {
  const appBarRef = useRef<HTMLDivElement | null>(null);

  const [boxSize, setBoxSize] = useState<BoxSize>({
    width: "auto",
    height: "auto",
  });

  useEffect(() => {
    if (appBarRef.current) {
      const { offsetWidth, offsetHeight } = appBarRef.current;

      setBoxSize({
        width: offsetWidth,
        height: offsetHeight,
      });
    }
  }, []);

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const offset =
      typeof boxSize.height === "number" ? boxSize.height : 0;

    const ref =
      refs[e.currentTarget.name as keyof SectionRefs];

    if (ref?.current) {
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY;

      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

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
            <StyledButton
              name="profileSection"
              variant="outlined"
              onClick={handleSubmit}
            >
              <ButtonTypography>Home</ButtonTypography>
            </StyledButton>

            <StyledButton
              name="projectsSection"
              variant="outlined"
              onClick={handleSubmit}
            >
              <ButtonTypography>Projects</ButtonTypography>
            </StyledButton>

            <StyledButton
              name="skillsSection"
              variant="outlined"
              onClick={handleSubmit}
            >
              <ButtonTypography>Skills</ButtonTypography>
            </StyledButton>

            <StyledButton
              name="contactSection"
              variant="outlined"
              onClick={handleSubmit}
            >
              <ButtonTypography>Contact</ButtonTypography>
            </StyledButton>
          </StyledStack>
        </StyledToolbar>
      </StyledAppbar>
    </Box>
  );
}

export default Header;