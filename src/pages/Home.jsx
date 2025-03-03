import { Box, Stack, styled } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import CirriculumCard from "../components/CirriculumCard";

const StyledStack = styled(Stack)({
  flexDirection: "row",
  gap: "20px",
});

const PlaceHolderBox = styled(Box)({
  flex: "1",
});

function Home(props) {
  const profileImg = props.profileImg;

  return (
    <StyledStack useFlexGap justifyContent="center" alignItems="center">
      <PlaceHolderBox />
      <EllipticalProfileCard profileImg={profileImg} />
      <CirriculumCard />
      <PlaceHolderBox bgcolor="red" />
    </StyledStack>
  );
}

export default Home;
