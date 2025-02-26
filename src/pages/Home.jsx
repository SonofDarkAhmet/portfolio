import { Stack } from "@mui/material";
import EllipticalProfileCard from "../components/EllipticalProfileCard";
import CirriculumCard from "../components/CirriculumCard";

const styles = {
  stack: {
    alignItems: "center",
    minWidth: "800px",
  },
};

function Home(props) {
  const profileImg = props.profileImg;

  return (
    <Stack direction="row" spacing={10} style={styles.stack}>
      <EllipticalProfileCard profileImg={profileImg} />
      <CirriculumCard />
    </Stack>
  );
}

export default Home;
