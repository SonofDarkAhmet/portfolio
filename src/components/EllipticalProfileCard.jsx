import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import profileImg from "../assets/profile-pic.jpeg";

const styles = {
  card: {
    width: "235px",
    height: "275px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid #eeeeee",
    borderRadius: "50%", // Makes the card elliptical
  },
  content: {
    textAlign: "center",
  },
  media: {
    width: "auto",
    height: "400px",
    objectFit: "cover",
    marginTop: "4.5rem",
    marginLeft: "0.35rem",
  },
};

function EllipticalProfileCard() {
  return (
    <Card sx={styles.card}>
      <CardContent sx={styles.content}>
        <CardMedia
          component="img"
          image={profileImg}
          alt="Profile picture."
          sx={styles.media}
        />
      </CardContent>
    </Card>
  );
}

export default EllipticalProfileCard;
