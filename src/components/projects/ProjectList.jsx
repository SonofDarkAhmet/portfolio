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

const Headline = styled(Typography)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  maxWidth: 345,
});

function ProjectCard(props) {
  const fullPathname = `${window.location.origin}${location.pathname}`;

  return (
    <StyledCard>
      <NavLink
        to={`projects/${props.id}`}
        state={{
          title: props.title,
          content: props.content,
          images: props.imgs,
        }}
        style={{ textDecoration: "none" }}
      >
        <CardHeader
          title={props.title}
          subheader={props.description}
          color="text.primary"
        />
        <CardMedia
          component="img"
          height="194"
          image={props.imgs[0]}
          alt={props.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Headline
            variant="body2"
            sx={{
              color: "text.secondary",
              textAlign: "justify",
            }}
          >
            {props.headline}
          </Headline>
        </CardContent>
      </NavLink>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <ShareLink link={`${fullPathname}projects/${props.id}`} />
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
