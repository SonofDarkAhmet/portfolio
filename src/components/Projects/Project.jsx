import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Project(props) {
  return (
    <NavLink to="../../" relative="path" className="back-button">
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <ArrowBackIcon fontSize="inherit" />
        Return Back
      </Typography>
    </NavLink>
  );
}

export default Project;
