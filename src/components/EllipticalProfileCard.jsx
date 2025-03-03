import React from "react";
import { Box, Card, CardContent, CardMedia } from "@mui/material";
import { styled } from "@mui/material/styles";

const ProfileBox = styled(Box)({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const ProfileCard = styled(Card)(({ theme }) => ({
  height: "125px",
  width: "100px",
  border: "3px solid #eeeeee",
  borderRadius: "50%",
  [theme.breakpoints.up("sm")]: { height: "200px", width: "150px" },
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
          <CardMedia
            component="img"
            image={profileImg}
            alt="Profile picture."
          />
        </ProfileCardContent>
      </ProfileCard>
    </ProfileBox>
  );
}

export default EllipticalProfileCard;
