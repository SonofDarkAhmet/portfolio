import { projects } from "../../data";
import { NavLink } from "react-router-dom";
import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareLink from "./ShareLink";

const ProjectGrid = styled(Grid)({
  margin: "2% 2%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const ItemGrid = styled(Grid)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
});

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 345,
});

function ProjectCard(props) {
  return (
    <StyledCard>
      <NavLink to={`projects\\${props.id}`} style={{ textDecoration: "none" }}>
        <CardHeader
          title={props.title}
          subheader={props.description}
          color="text.primary"
        />
        <CardMedia
          component="img"
          height="194"
          image={props.img}
          alt={props.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "justify",
            }}
          >
            {props.headline}
          </Typography>
        </CardContent>
      </NavLink>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <ShareLink />
      </CardActions>
    </StyledCard>
  );
}

function ProjectList() {
  return (
    <ProjectGrid container spacing={{ xs: 4, sm: 6 }}>
      {projects &&
        projects.map((item) => {
          return <ItemGrid key={item.id}>{ProjectCard(item)}</ItemGrid>;
        })}
    </ProjectGrid>
  );
}

export default ProjectList;
