import { Box, Typography, styled } from "@mui/material";
import { vitaeContext } from "../data";

const VitaeBox = styled(Box)({ marginTop: "1rem" });

const VitaeTypography = styled(Typography)({
  fontWeight: "200", // Equivalent to font-light
  textAlign: "justify",
  letterSpacing: "-0.025em", // Tracking tighter
  color: "#D4D4D4",
});

function Vitae() {
  return (
    <VitaeBox>
      <VitaeTypography variant="body1">{vitaeContext}</VitaeTypography>
    </VitaeBox>
  );
}

export default Vitae;
