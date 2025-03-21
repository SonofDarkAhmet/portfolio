import { projects } from "../../data";
import { useState, useEffect } from "react";
import { NavLink, useLocation, useOutletContext } from "react-router-dom";
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

function ProjectCard({ ref, item }) {
  const location = useLocation();
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
        state={{
          title: item.title,
          content: item.content,
          images: item.imgs,
        }}
        style={{ textDecoration: "none" }}
      >
        <CardHeader
          title={item.title}
          subheader={item.description}
          color="text.primary"
        />
        <CardMedia
          component="img"
          height="194"
          image={item.imgs[0]}
          alt={item.title}
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
            {item.headline}
          </Headline>
        </CardContent>
      </NavLink>
      <CardActions disableSpacing>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <ShareLink link={`${fullPathname}projects/${item.id}`} />
      </CardActions>
    </StyledCard>
  );
}

function ProjectList() {
  const { ref } = useOutletContext();

  return (
    <ProjectGrid container spacing={{ xs: 4, sm: 6 }}>
      {projects &&
        projects.map((item) => {
          return (
            <ItemGrid key={item.id}>
              {<ProjectCard ref={ref} item={item} />}
            </ItemGrid>
          );
        })}
    </ProjectGrid>
  );
}

export default ProjectList;
