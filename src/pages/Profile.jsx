import { Box, Typography, Stack, styled } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import Vitae from "../components/Vitae";

const ProfileStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  alignItems: "center",
  zIndex: -2,
  paddingLeft: "5rem",
  paddingRight: "5rem",
  minHeight: "100vh",
  backgroundColor: "rgba(10,10,10,1)", // This is equivalent to bg-neutral-950 (dark background)
  backgroundImage:
    "radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))",
}));

const ProfileTextStack = styled(Stack)(({ theme }) => ({
  flex: "6",
  justifyContent: "center",
  alignItems: "flex-start",
}));

const NamePlate = styled(Typography)(({ theme }) => ({
  letterSpacing: "-0.01562rem", // Tracking tight
  color: "white",
  paddingBottom: "2rem",
  fontWeight: "100", // Equivalent to font-thin
}));

const JobTitle = styled(Typography)({
  background:
    "linear-gradient(to right, #56C596, #329D9C, #205072 , #7BE495, #CFF4D2)", // Gradient: from-pink-300, via-slate-500, to-purple-500
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  fontSize: "2.25rem", // Equivalent to text-4xl
  fontWeight: "300",
  letterSpacing: "-0.01562em", // Tracking tight
});

function Profile(props) {
  const profileImg = props.profileImg;

  return (
    <ProfileStack spacing={2}>
      <ProfileTextStack>
        <NamePlate variant="h1">Raif Karaahmetoğlu</NamePlate>
        <JobTitle variant="h4">Software Control Developer</JobTitle>
        <Vitae />
      </ProfileTextStack>
      <EllipticalProfileCard profileImg={profileImg} />
    </ProfileStack>
  );
}

export default Profile;
