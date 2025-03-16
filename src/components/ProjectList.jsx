import { projects } from "../data";
import {
  styled,
  Stack,
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
import ShareIcon from "@mui/icons-material/Share";

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

function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={props.title} subheader={props.description} />
      <CardMedia
        component="img"
        height="194"
        image={props.img}
        alt={props.title}
        sx={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

function ProjectList() {
  return (
    <ProjectGrid container spacing={{ xs: 4, sm: 6, md: 12 }}>
      {projects &&
        projects.map((item) => {
          return <ItemGrid key={item.id}>{ProjectCard(item)}</ItemGrid>;
        })}
    </ProjectGrid>
  );
}

export default ProjectList;
