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

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: "#fff",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const styles = {
  box: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  typography: {
    marginLeft: "5px",
  },
};

function SkillWall() {
  return (
    <Box sx={{ width: 800, minHeight: 377 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={3}>
        {skillList.map((elements) => (
          <Paper key={elements.id}>
            <StyledAccordion sx={{ minHeight: getRandomInteger(30, 150) }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box style={styles.box}>
                  <img height="25px" src={elements.img} alt={elements.title} />
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
  );
}

export default SkillWall;

const skillList = [
  {
    id: 1,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matlab/matlab-original.svg",
    title: "Matlab",
    content:
      "Since 2009, I have been using MATLAB and Simulink for both the simulation and control of automotive systems, developing and testing various technologies to enhance vehicle performance and safety.",
  },
  {
    id: 2,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    title: "C",
    content:
      "I have expertly utilized C to develop sophisticated simulation models, seamlessly integrating them with MATLAB and Simulink for real-time applications. Additionally, I have harnessed the power of C for real-time control applications in automotive systems.",
  },
  {
    id: 3,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    title: "C++",
    content:
      "I learned C++ through a comprehensive course, gaining detailed knowledge. Afterward, I implemented a FlexLM license solution, applying my C++ skills effectively.",
  },
  {
    id: 4,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    title: "Python",
    content:
      "I have leveraged Python to develop a comprehensive vehicle dynamics library, automate HIL project creation, and contribute to various AI and statistical algorithm projects. Additionally, I have professionally implemented design patterns and SOLID principles, showcasing my expertise in Python.",
  },
  {
    id: 5,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    content:
      "I have utilized JavaScript to develop AVL Route Studio projects, focusing on the UI parts related to the algorithms I was responsible for.",
  },
  {
    id: 6,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    title: "HTML",
    content:
      "I am currently learning HTML to enhance my skills in creating more sophisticated and visually appealing UI projects.",
  },
  {
    id: 7,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    title: "CSS",
    content:
      "I am currently learning CSS to enhance my skills in creating more sophisticated and visually appealing UI projects.",
  },
  {
    id: 8,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    title: "React",
    content:
      "I have learned the React framework and React Router to implement web-based UI developments, enhancing my ability to create dynamic and responsive user interfaces.",
  },
  {
    id: 9,
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    title: "Material UI",
    content:
      "I have learned the Material UI component library to enhance my UI development skills, creating more visually appealing and sophisticated interfaces.",
  },
  {
    id: 10,
    img: "https://upload.wikimedia.org/wikipedia/commons/6/60/DS-CATIA-Logo.png",
    title: "Catia",
    content:
      "I have utilized CATIA to develop mechanical system designs, particularly for remote-controlled weapon systems such as OTOKAR - UCOK.",
  },
  {
    id: 11,
    img: "./src/assets/ea-logo.png",
    title: "Enterprise Architect",
    content:
      "I have used Enterprise Architect to implement system engineering for the development of construction machinery, ensuring robust and efficient design processes.",
  },
];
