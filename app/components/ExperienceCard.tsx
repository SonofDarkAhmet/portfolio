import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";

import type { ExperienceItem } from "../data";

const Card = styled(Box)({
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-md)",
  padding: "18px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const Period = styled(Typography)({
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  color: "var(--text-muted)",
});

const Role = styled(Typography)({
  fontSize: "14px",
  fontWeight: 600,
  color: "var(--text-primary)",
});

const Company = styled(Typography)({
  fontSize: "12px",
  color: "var(--accent-primary)",
});

const Summary = styled(Typography)({
  fontSize: "12px",
  color: "var(--text-secondary)",
  marginTop: "4px",
});

const Detail = styled(Typography)({
  fontSize: "12px",
  color: "var(--text-secondary)",
  marginTop: "8px",
  lineHeight: 1.6,
});

type ExperienceCardProps = {
  item: ExperienceItem;
};

export default function ExperienceCard({
  item,
}: ExperienceCardProps): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <Card onClick={() => setOpen((prev) => !prev)}>
      <Period>{item.period}</Period>
      <Role>{item.role}</Role>
      <Company>{item.company}</Company>
      <Summary>{item.summary}</Summary>
      {open && <Detail>{item.detail}</Detail>}
    </Card>
  );
}
