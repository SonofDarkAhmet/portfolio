import { Box, Typography, styled } from "@mui/material";

import { skillGroups } from "../data";

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}));

const GroupCard = styled(Box)({
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-md)",
  padding: "16px",
});

const GroupName = styled(Typography)({
  fontSize: "12px",
  color: "var(--text-muted)",
  marginBottom: "10px",
});

const ItemsStack = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
});

const Item = styled(Typography)({
  fontFamily: "var(--font-mono)",
  fontSize: "12px",
  color: "var(--text-secondary)",
});

export default function SkillWall(): React.ReactElement {
  return (
    <SkillsGrid>
      {skillGroups.map((group) => (
        <GroupCard key={group.name}>
          <GroupName>{group.name}</GroupName>
          <ItemsStack>
            {group.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </ItemsStack>
        </GroupCard>
      ))}
    </SkillsGrid>
  );
}
