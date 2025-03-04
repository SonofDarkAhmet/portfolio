import { Box, Typography, Stack, styled } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import CirriculumCard from "../components/CirriculumCard";

function Home(props) {
  const profileImg = props.profileImg;

  const BlockBox = styled(Box)({
    display: "flex",
  });

  const SectionTitle = styled(Typography)({
    display: "block",
    width: "100%",
    textDecoration: "underline",
    color: "#885245",
  });

  return (
    <Stack
      flex={1}
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <SectionTitle variant="h5">Home</SectionTitle>
      <BlockBox>
        <EllipticalProfileCard profileImg={profileImg} />
        <CirriculumCard />
      </BlockBox>
    </Stack>
  );
}

export default Home;
