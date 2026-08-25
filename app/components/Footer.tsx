import React from "react";
import { Box, Stack, Typography, IconButton, styled } from "@mui/material";

const FooterBox = styled(Box)(({ theme }) => ({
  padding: "28px 80px",
  background: "var(--gradient-aurora)",
  borderTop: "1px solid var(--border-subtle)",
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
    textAlign: "center",
  },
}));

const FooterStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));

const IconStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
});

const StyledIconButton = styled(IconButton)({
  color: "var(--text-secondary)",
  "&:hover": {
    color: "var(--accent-primary)",
  },
});

const CopyrightText = styled(Typography)({
  fontFamily: "var(--font-sans)",
  fontWeight: 200,
  fontSize: "13px",
  color: "var(--text-secondary)",
});

const TaglineText = styled(Typography)({
  fontFamily: "var(--font-sans)",
  fontWeight: 400,
  fontSize: "13px",
  color: "var(--text-secondary)",
});

function Footer(): React.ReactElement {
  return (
    <FooterBox>
      <FooterStack>
        <CopyrightText>© 2026 All rights reserved.</CopyrightText>
        <TaglineText>
          Thanks for visiting! Feel free to connect with me.
        </TaglineText>
        <IconStack>
          <StyledIconButton
            // @ts-expect-error MUI v9 styled(IconButton) drops the polymorphic `component` prop from its type
            component="a"
            href="https://linkedin.com/in/raif-karaahmetoglu"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.8H9z" />
            </svg>
          </StyledIconButton>
          <StyledIconButton
            // @ts-expect-error MUI v9 styled(IconButton) drops the polymorphic `component` prop from its type
            component="a"
            href="https://github.com/SonofDarkAhmet"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.94.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </StyledIconButton>
        </IconStack>
      </FooterStack>
    </FooterBox>
  );
}

export default Footer;
