import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProfileBox = styled(Box)({
  flex: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "2rem",
});

const ProfileCard = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "250px",
  width: "185px",
  borderRadius: "50%",
  overflow: "hidden",
  [theme.breakpoints.up("sm")]: { height: "500px", width: "375px" },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "inherit",
    padding: "3px", // Adjust the padding to match the border width
    background:
      "linear-gradient(to right, #205072, #329D9C, #56C596, #7BE495, #CFF4D2)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  },
  "& > *": {
    position: "relative",
    borderRadius: "inherit",
    backgroundColor: "#fff", // Background color of the card
  },
}));

const ProfileCardContent = styled(CardContent)({
  display: "contents",
});

function EllipticalProfileCard(props) {
  const profileImg = props.profileImg;

  return (
    <ProfileBox>
      <ProfileCard>
        <ProfileCardContent>
          <CardMedia component="img" src={profileImg} alt="Profile picture." />
        </ProfileCardContent>
      </ProfileCard>
    </ProfileBox>
  );
}

export default EllipticalProfileCard;
