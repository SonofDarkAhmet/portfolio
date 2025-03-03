import { getRandomInteger } from "../utils";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Masonry from "@mui/lab/Masonry";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import skillList from "../skillList";

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  typography: {
    marginLeft: "5px",
  },
};

function SkillWall(props) {
  const eaLogoImg = props.eaLogoImg;

  // Update the skillList with eaLogoImg
  const updatedSkillList = skillList.map((skill) =>
    skill.title === "Enterprise Architect"
      ? { ...skill, img: eaLogoImg }
      : skill
  );

  return (
    <Box sx={styles.container}>
      <Box
        component="div"
        sx={{
          width: "800px",
          minHeight: "377px",
          overflow: "hidden",
          maxWidth: "100%",
        }}
      >
        <Masonry width="fitContent" columns={{ xs: 3, sm: 4 }} spacing={3}>
          {updatedSkillList.map((elements) => (
            <Paper key={elements.id}>
              <StyledAccordion sx={{ minHeight: getRandomInteger(30, 150) }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box style={styles.box}>
                    <img
                      height="25px"
                      src={elements.img}
                      alt={elements.title}
                    />
                    <Typography
                      component="div"
                      variant="caption"
                      style={styles.typography}
                    >
                      {elements.title}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    component="div"
                    variant="caption"
                    style={styles.typography}
                  >
                    {elements.content}
                  </Typography>
                </AccordionDetails>
              </StyledAccordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </Box>
  );
}

export default SkillWall;
