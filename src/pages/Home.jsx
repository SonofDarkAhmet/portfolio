import { Box, Typography, Stack, styled } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import CirriculumCard from "../components/CirriculumCard";

const HomeStack = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  zIndex: -2,
  height: "100vh",
  backgroundColor: "rgba(10,10,10,1)", // This is equivalent to bg-neutral-950 (dark background)
  backgroundImage:
    "radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))",
});

const BlockBox = styled(Box)({
  display: "flex",
});

const SectionTitle = styled(Typography)({
  display: "block",
  width: "100%",
  textDecoration: "underline",
  color: "#885245",
});

function Home(props) {
  const profileImg = props.profileImg;

  return (
    <HomeStack spacing={2}>
      <SectionTitle variant="h5">Home</SectionTitle>
      <Box sx={{ paddingBottom: "64px", position: "absolute" }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2rem", lg: "3rem" }, // Text size: 6xl for large screens
            fontWeight: "300", // Equivalent to font-thin
            letterSpacing: "-0.01562em", // Tracking tight
            marginTop: { lg: "64px" }, // Margin for large screens
            color: "#D4D4D4",
          }}
        >
          Raif Karaahmetoğlu
        </Typography>

        <Typography
          variant="h4"
          sx={{
            background: "linear-gradient(to right, #ec4899, #64748b, #8b5cf6)", // Gradient: from-pink-300, via-slate-500, to-purple-500
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: "2.25rem", // Equivalent to text-4xl
            letterSpacing: "-0.01562em", // Tracking tight
          }}
        >
          Software Control Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            marginY: "16px", // Equivalent to my-2
            maxWidth: "36rem", // Equivalent to max-w-xl
            paddingY: "24px", // Equivalent to py-6
            fontWeight: "300", // Equivalent to font-light
            letterSpacing: "-0.025em", // Tracking tighter
            color: "#D4D4D4",
          }}
        >
          I am a mechatronics engineer who dedicate his carrer to the core
          pillars of mechatronics which are mechanical, control systems and
          software desings. My expertise ranges from designing intricate
          mechanical systems to developing complex algorithms and advanced
          control systems in C, Matlab/Simulink and Python. I take great
          satisfaction in being a quick learner, able to dive into new areas and
          integrate the latest software design principles to bring innovative
          solutions to life.
        </Typography>
      </Box>
      <BlockBox>
        <EllipticalProfileCard profileImg={profileImg} />
        {/* <CirriculumCard /> */}
      </BlockBox>
    </HomeStack>
  );
}

export default Home;
