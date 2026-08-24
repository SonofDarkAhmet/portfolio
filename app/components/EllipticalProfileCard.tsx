import type React from "react";

type EllipticalProfileCardProps = {
  profileImg: string;
  size?: number;
};

export default function EllipticalProfileCard({
  profileImg,
  size = 400
}: Readonly<EllipticalProfileCardProps>): React.ReactElement {
  return (
    <div style={{
      width: size,
      maxWidth: "100%",
      aspectRatio: "3/4",
      borderRadius: "50%",
      position: "relative",
      overflow: "hidden",
      padding: 3,
      background: "var(--gradient-legacy-ring)"
    }}>
      <img src={profileImg} alt="Profile picture." 
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
        display: "block",
        background: "var(--surface-card)"
      }}
      />
    </div>
  )
}
