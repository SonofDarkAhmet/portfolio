import { Box, Typography, Stack, styled } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import CirriculumCard from "../components/CirriculumCard";

const HomeStack = styled(Stack)({
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
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
      <BlockBox>
        <EllipticalProfileCard profileImg={profileImg} />
        <CirriculumCard />
      </BlockBox>
    </HomeStack>
  );
}

export default Home;
