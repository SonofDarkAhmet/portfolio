import { projects } from "../../data";
import { useEffect } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import {
  styled,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
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

function ProjectCard({ ref, item }) {
  const fullPathname = `${window.location.origin}${location.pathname}`;

  useEffect(() => {
    return () => {
      if (ref) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  }, []);

  return (
    <StyledCard>
      <NavLink
        to={`projects/${item.id}`}
        style={{ textDecoration: "none", color: "#24262e" }}
      >
        <CardHeader title={item.title} subheader={item.description} />
        <CardMedia
          component="img"
          height="194"
          image={item.images[0]}
          alt={item.title}
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Headline
            variant="body2"
            sx={{
              textAlign: "justify",
            }}
          >
            {item.headline}
          </Headline>
        </CardContent>
      </NavLink>
      <CardActions disableSpacing>
        <ShareLink link={`${fullPathname}projects/${item.id}`} />
      </CardActions>
    </StyledCard>
  );
}

function ProjectList() {
  const context = useOutletContext();

  return (
    <ProjectGrid container spacing={{ xs: 4, sm: 6 }}>
      {projects &&
        projects.map((item) => {
          return (
            <ItemGrid key={item.id}>
              {<ProjectCard ref={context} item={item} />}
            </ItemGrid>
          );
        })}
    </ProjectGrid>
  );
}

export default ProjectList;
