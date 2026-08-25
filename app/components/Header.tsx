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
    maxWidth: "94vw",
    padding: "4px 6px",
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

type HeaderProps = {
  refs: SectionRefs;
  onHeightChange?: (height: number) => void;
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
          </StyledStack>
        </StyledToolbar>
      </StyledAppbar>
    </Box>
  );
}