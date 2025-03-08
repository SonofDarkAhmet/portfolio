import { Box, Card, CardContent, styled, Typography } from "@mui/material";

const CirriculumCardBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70%",
});

const CirriculumCardElement = styled(Card)({});

function CirriculumCard() {
  return (
    <CirriculumCardBox>
      <CirriculumCardElement>
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            variant="h6"
            color="textPrimary"
            fontWeight="Bold"
          >
            BioSketch
          </Typography>
          <Typography
            gutterBottom
            component="div"
            variant="subtitle1"
            color="textPrimary"
            fontSize="1rem"
          >
            I am a mechatronics engineer who dedicate his carrer to the core
            pillars of mechatronics which are mechanical, control systems and
            software desings. My expertise ranges from designing intricate
            mechanical systems to developing complex algorithms and advanced
            control systems in C, Matlab/Simulink and Python. I take great
            satisfaction in being a quick learner, able to dive into new areas
            and integrate the latest software design principles to bring
            innovative solutions to life.
          </Typography>
        </CardContent>
      </CirriculumCardElement>
    </CirriculumCardBox>
  );
}

export default CirriculumCard;
