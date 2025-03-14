import { getRandomInteger } from "../utils";
import {
  styled,
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CardMedia,
} from "@mui/material";
import { Masonry } from "@mui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { skillList } from "../data";

const SkillWallBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  minHeight: "377px",
  margin: "2% 2%",
  overflow: "hidden",
});

const StyledMasonry = styled(Masonry)({
  maxWidth: "70%",
});

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  minHeight: getRandomInteger(70, 150),
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const StyledTitleTypography = styled(Typography)({
  marginLeft: "5px",
  fontWeight: "bold",
});

const StyledTypography = styled(Typography)({
  marginLeft: "5px",
});

const CardHeaderBox = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
});

function SkillWall(props) {
  const eaLogoImg = props.eaLogoImg;

  // Update the skillList with eaLogoImg
  const updatedSkillList = skillList.map((skill) =>
    skill.title === "Enterprise Architect"
      ? { ...skill, img: eaLogoImg }
      : skill
  );

  const updatedSkillListElements = updatedSkillList.map((elements) => (
    <Paper key={elements.id}>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <CardHeaderBox>
            <img src={elements.img} alt={elements.title} height="25px" />
            <StyledTitleTypography component="div" variant="subtitle2">
              {elements.title}
            </StyledTitleTypography>
          </CardHeaderBox>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography component="div" variant="caption">
            {elements.content}
          </StyledTypography>
        </AccordionDetails>
      </StyledAccordion>
    </Paper>
  ));

  return (
    <SkillWallBox>
      <StyledMasonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={3}>
        {updatedSkillList.length > 0 && updatedSkillListElements}
      </StyledMasonry>
    </SkillWallBox>
  );
}

export default SkillWall;
