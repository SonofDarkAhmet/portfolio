import { projects, type Project } from "../../data";
import type React from "react";
import { Box, Typography, styled } from "@mui/material";

const ListStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "36px",
  marginTop: "24px",
});

const Row = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "28px",
  alignItems: "flex-start",
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-lg)",
  padding: "16px",
  cursor: "pointer",
  transition:
    "transform var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out)",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: "var(--border-strong)",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Thumb = styled(Box)(({ theme }) => ({
  width: "280px",
  height: "180px",
  borderRadius: "var(--radius-md)",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "none",
  background: "var(--surface-sunken)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const RowContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  flex: 1,
  height: "180px",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
  },
}));

const Badge = styled(Typography)({
  fontFamily: "var(--font-mono)",
  fontSize: "12px",
  color: "var(--accent-primary)",
  background: "var(--accent-on-accent)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-pill)",
  padding: "4px 12px",
  whiteSpace: "nowrap",
});

const HeadlineWrap = styled(Box)({
  flex: 1,
  display: "flex",
  alignItems: "center",
});

const Headline = styled(Typography)({
  fontSize: "15px",
  lineHeight: 1.6,
  color: "var(--text-secondary)",
});

const ReadMore = styled(Typography)({
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--accent-primary)",
});

type ProjectListProps = {
  onOpen: (id: number) => void;
};

export default function ProjectList({
  onOpen,
}: ProjectListProps): React.ReactElement {
  return (
    <ListStack>
      {projects.map((item: Project) => (
        <Row key={item.id} onClick={() => onOpen(item.id)}>
          <Thumb>
            <img
              src={item.images[0]}
              alt={item.title}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Thumb>
          <RowContent>
            <Badge>{item.description}</Badge>
            <HeadlineWrap>
              <Headline>{item.headline}</Headline>
            </HeadlineWrap>
            <ReadMore>Read case study →</ReadMore>
          </RowContent>
        </Row>
      ))}
    </ListStack>
  );
}
