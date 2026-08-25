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
import type { SectionRefs } from "../types";
import type { ThemeMode } from "../lib/theme";
import { scrollToRef } from "../lib/scroll";

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
  flexWrap: "nowrap",
});

const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  flexWrap: "nowrap",
  backgroundColor: "var(--surface-pill)",
  padding: "5px 10px",
  borderRadius: "var(--radius-pill)",
  boxShadow: "var(--shadow-card)",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    minWidth: "fit-content",
    maxWidth: "94vw",
    padding: "4px 6px",
    overflowX: "auto",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  flexShrink: 1,
  minWidth: "auto",
  padding: "8px 16px",
  color: active ? "var(--accent-primary-strong)" : "var(--text-on-pill)",
  backgroundColor: active ? "var(--accent-on-accent)" : "transparent",
  borderRadius: "var(--radius-pill)",
  border: "none",
  textTransform: "none",
  whiteSpace: "nowrap",
  [theme.breakpoints.down("sm")]: {
    padding: "6px 8px",
  },
}));

const ButtonTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "14px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));

const ThemeToggleButton = styled("button")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: "32px",
  height: "32px",
  marginLeft: "4px",
  padding: 0,
  border: "none",
  borderRadius: "var(--radius-pill)",
  background: "transparent",
  color: "var(--text-on-pill)",
  cursor: "pointer",
  "&:hover": {
    color: "var(--accent-primary-strong)",
  },
});

type HeaderProps = {
  refs: SectionRefs;
  onHeightChange?: (height: number) => void;
  themeMode: ThemeMode;
  onToggleTheme: () => void;
};

type BoxSize = {
  width: number | string;
  height: number | string;
};

const NAV_ITEMS: { key: keyof SectionRefs; label: string }[] = [
  { key: "profileSection", label: "Home" },
  { key: "experienceSection", label: "Experience" },
  { key: "projectsSection", label: "Projects" },
  { key: "skillsSection", label: "Skills" },
  { key: "contactSection", label: "Contact" },
];

export default function Header({
  refs,
  onHeightChange,
  themeMode,
  onToggleTheme,
}: HeaderProps): React.ReactElement {
  const appBarRef = useRef<HTMLDivElement | null>(null);

  const [boxSize, setBoxSize] = useState<BoxSize>({
    width: "auto",
    height: "auto",
  });

  const [active, setActive] = useState<keyof SectionRefs>("profileSection");

  useEffect(() => {
    if (appBarRef.current) {
      const { offsetWidth, offsetHeight } = appBarRef.current;

      setBoxSize({
        width: offsetWidth,
        height: offsetHeight,
      });
      onHeightChange?.(offsetHeight);
    }
  }, [onHeightChange]);

  useEffect(() => {
    const visibleRatios = new Map<keyof SectionRefs, number>();

    const recompute = () => {
      const se = document.scrollingElement || document.documentElement;
      if (se && se.scrollHeight - (se.scrollTop + se.clientHeight) < 4) {
        setActive(NAV_ITEMS[NAV_ITEMS.length - 1].key);
        return;
      }

      let best: keyof SectionRefs | null = null;
      let bestRatio = -1;
      NAV_ITEMS.forEach(({ key }) => {
        const ratio = visibleRatios.get(key) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = key;
        }
      });
      if (best && bestRatio > 0) setActive(best);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = NAV_ITEMS.find(
            ({ key }) => refs[key].current === entry.target
          );
          if (match) {
            visibleRatios.set(
              match.key,
              entry.isIntersecting ? entry.intersectionRatio : 0
            );
          }
        });
        recompute();
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    NAV_ITEMS.forEach(({ key }) => {
      if (refs[key].current) io.observe(refs[key].current);
    });

    window.addEventListener("scroll", recompute, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", recompute);
    };
  }, [refs]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const offset = typeof boxSize.height === "number" ? boxSize.height : 0;

    const key = e.currentTarget.name as keyof SectionRefs;
    const ref = refs[key];

    if (ref?.current) {
      scrollToRef(ref, offset);
      setActive(key);
    }
  };

  return (
    <Box sx={{ height: boxSize.height, width: boxSize.width }}>
      <StyledAppbar
        // @ts-expect-error MUI v9 styled(AppBar) drops the polymorphic `component` prop from its type
        component="nav"
        color="transparent"
        elevation={0}
        ref={appBarRef}
      >
        <StyledToolbar>
          <StyledStack>
            {NAV_ITEMS.map(({ key, label }) => (
              <StyledButton
                key={key}
                name={key}
                active={active === key}
                onClick={handleSubmit}
              >
                <ButtonTypography>{label}</ButtonTypography>
              </StyledButton>
            ))}
            <ThemeToggleButton
              onClick={onToggleTheme}
              aria-label={
                themeMode === "light"
                  ? "Switch to dark theme"
                  : "Switch to light theme"
              }
            >
              {themeMode === "light" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </ThemeToggleButton>
          </StyledStack>
        </StyledToolbar>
      </StyledAppbar>
    </Box>
  );
}