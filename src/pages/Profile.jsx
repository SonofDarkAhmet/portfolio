import { Grid2 as Grid, Stack, Typography, styled } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import Vitae from "../components/Vitae";

const ProfileGrid = styled(Grid)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  justifyContent: "center",
  alignItems: "center",
  zIndex: -2,
  paddingLeft: "5%",
  paddingRight: "5%",
  minHeight: "100vh",
  backgroundColor: "rgb(3, 3, 3)", // This is equivalent to bg-neutral-950 (dark background)
  backgroundImage:
    "radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))",
}));

const ProfileTextStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
  },
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
  fontWeight: "300",
  letterSpacing: "-0.01562em", // Tracking tight
});

function Profile(props) {
  const profileImg = props.profileImg;

  return (
    <ProfileGrid container spacing={2} ref={props.ref}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ProfileTextStack>
          <NamePlate variant="h2">Raif Karaahmetoğlu</NamePlate>
          <JobTitle variant="h4">Software Control Developer</JobTitle>
          <Vitae />
        </ProfileTextStack>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <EllipticalProfileCard profileImg={profileImg} />
      </Grid>
    </ProfileGrid>
  );
}

export default Profile;
