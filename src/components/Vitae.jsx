import { Box, Typography, styled } from "@mui/material";

const VitaeBox = styled(Box)({ marginTop: "1rem" });

const VitaeTypography = styled(Typography)({
  maxWidth: "48rem", // Equivalent to max-w-xl
  fontWeight: "200", // Equivalent to font-light
  textAlign: "justify",
  letterSpacing: "-0.025em", // Tracking tighter
  color: "#D4D4D4",
});

function Vitae() {
  return (
    <VitaeBox>
      <VitaeTypography variant="body1">
        I am a mechatronics engineer who dedicate his carrer to the core pillars
        of mechatronics which are mechanical, control systems and software
        desings. My expertise ranges from designing intricate mechanical systems
        to developing complex algorithms and advanced control systems in C,
        Matlab/Simulink and Python. I take great satisfaction in being a quick
        learner, able to dive into new areas and integrate the latest software
        design principles to bring innovative solutions to life.
      </VitaeTypography>
    </VitaeBox>
  );
}

export default Vitae;
