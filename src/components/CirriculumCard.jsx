import { Box, Card, CardContent, styled, Typography } from "@mui/material";

const CirriculumCardBox = styled(Box)({
  flex: 2,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CirriculumCardElement = styled(Card)({
  background: "#eeeeee",
});

function CirriculumCard() {
  return (
    <CirriculumCardBox>
      <CirriculumCardElement>
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            variant="h4"
            color="textPrimary"
          >
            BioSketch
          </Typography>
          <Typography
            gutterBottom
            component="div"
            variant="subtitle1"
            color="textPrimary"
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
