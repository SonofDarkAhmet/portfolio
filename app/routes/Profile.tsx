import React from "react";
import { Box, Stack, Typography, Button, styled } from "@mui/material";

import EllipticalProfileCard from "../components/EllipticalProfileCard";
import { vitaeContext, heroName, jobTitle, stats } from "../data";
import { scrollToRef } from "../lib/scroll";

const HeroSection = styled(Box)({
  position: "relative",
  padding: "170px 80px 90px",
  background: "var(--gradient-aurora)",
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "60px",
  alignItems: "center",
  justifyContent: "center",
  maxWidth: "1400px",
  margin: "0 auto",
});

const ContentStack = styled(Stack)({
  gap: "28px",
});

const NamePlate = styled(Typography)({
  fontSize: "var(--text-display)",
  fontWeight: "var(--fw-thin)",
  lineHeight: "var(--lh-display)",
  letterSpacing: "var(--ls-display)",
  color: "var(--text-primary)",
});

const JobTitle = styled(Typography)({
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-mono-label)",
  letterSpacing: "var(--ls-mono-label)",
  color: "var(--accent-primary)",
});

const VitaeText = styled(Typography)({
  fontSize: "var(--text-body-lg)",
  lineHeight: "var(--lh-body-lg)",
  color: "var(--text-secondary)",
  maxWidth: "620px",
});

const ButtonStack = styled(Stack)({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gap: "14px",
  alignItems: "center",
  justifyContent: "center",
});

const AccentButton = styled(Button)({
  backgroundColor: "var(--accent-primary)",
  color: "var(--accent-on-accent)",
  borderRadius: "var(--radius-pill)",
  padding: "12px 28px",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    backgroundColor: "var(--accent-primary-hover)",
  },
});

const OutlineButton = styled(Button)({
  borderRadius: "var(--radius-pill)",
  borderColor: "var(--border-strong)",
  color: "var(--text-primary)",
  padding: "12px 28px",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    borderColor: "var(--accent-primary)",
    color: "var(--accent-primary)",
  },
});

const StatsGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
  maxWidth: "620px",
});

const StatCard = styled(Box)({
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-lg)",
  padding: "22px",
  boxShadow: "var(--shadow-card)",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const StatValue = styled(Typography)({
  fontFamily: "var(--font-mono)",
  fontSize: "26px",
  color: "var(--accent-primary)",
});

const StatLabel = styled(Typography)({
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--text-primary)",
});

const StatSub = styled(Typography)({
  fontSize: "11px",
  color: "var(--text-muted)",
});

type ProfileProps = {
  profileImg: string;
  ref?: React.RefObject<HTMLDivElement | null>;
  contactRef?: React.RefObject<HTMLDivElement | null>;
  appBarHeight?: number;
};

export default function Profile({
  profileImg,
  ref,
  contactRef,
  appBarHeight = 0,
}: ProfileProps): React.ReactElement {
  return (
    <HeroSection id="home" ref={ref}>
      <EllipticalProfileCard profileImg={profileImg} size={400} />
      <ContentStack>
        <Stack spacing={2}>
          <NamePlate>{heroName}</NamePlate>
          <JobTitle>{jobTitle}</JobTitle>
          <VitaeText>{vitaeContext}</VitaeText>
          <ButtonStack direction="row" sx={{ mt: 1 }}>
            <AccentButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToRef(contactRef, appBarHeight);
              }}
            >
              Get in touch
            </AccentButton>
            <OutlineButton
              variant="outlined"
              href="/Raif_Karaahmetoglu_Resume.pdf"
              // @ts-expect-error MUI v9 styled(Button) drops the `download` prop that's valid when rendered as an <a>
              download="Raif_Karaahmetoglu_Resume.pdf"
            >
              Résumé
            </OutlineButton>
          </ButtonStack>
        </Stack>
        <StatsGrid>
          {stats.map((s) => (
            <StatCard key={s.label}>
              <StatValue>{s.value}</StatValue>
              <StatLabel>{s.label}</StatLabel>
              <StatSub>{s.sub}</StatSub>
            </StatCard>
          ))}
        </StatsGrid>
      </ContentStack>
    </HeroSection>
  );
}
