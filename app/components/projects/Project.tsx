import type React from "react";
import { projects, type Project as ProjectData } from "../../data";
import { NavLink, useParams } from "react-router";
import {
  Box,
  Stack,
  Typography,
  Divider,
  ImageList,
  ImageListItem,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ReturnBackTypoGraphy = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginTop: "1%",
  color: "#24262e",
});

const ImageStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
  justifyContent: "center",
  alignItems: "center",
  margin: "1% 2%",
}));

const ContextBox = styled(Box)(({ theme }) => ({
  height: "50vh",
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  overflowY: "auto",
  padding: "2rem",
  margin: "5% 1%",
  borderRadius: "1rem",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
}));

const PreformattedTypography = styled(Typography)({
  textAlign: "justify",
  whiteSpace: "pre-wrap",
  margin: "0% 2% 0% 0%",
});

const ProjectImageListItem = styled(ImageListItem)({
  backgroundColor: "rgb(240, 242, 245)",
  borderRadius: "1rem",
  marginBottom: "2rem",
});

export default function Project() {
  const params = useParams();
  const project = projects.find((p) => p.id === Number(params.id));

  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }

  function ProjectImages({
    images,
    title,
  }: {
    images: ProjectData["images"];
    title: ProjectData["title"];
  }): React.ReactElement {
    return (
      <ImageList cols={1} sx={{ overflow: "unset" }}>
        {images.map((link, idx) => (
          <ProjectImageListItem key={idx}>
            <img
              srcSet={`${link}?w=426&h=426&fit=crop&auto=format&dpr=1 1x`}
              src={`${link}?w=426&h=426&fit=crop&auto=format`}
              alt={`${title}-${idx}`}
              loading="lazy"
              style={{
                objectFit: "fill",
                borderRadius: "1rem",
              }}
            />
          </ProjectImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <Box>
      <NavLink to="../../" relative="path">
        <ReturnBackTypoGraphy>
          <ArrowBackIcon fontSize="inherit" />
          Return Back
        </ReturnBackTypoGraphy>
      </NavLink>
      <ImageStack>
        <ContextBox>
          <Typography
            variant="h4"
            style={{ display: "inline-block", marginBottom: "2rem" }}
          >
            {project.title}
            <Divider orientation="horizontal" variant="fullWidth" />
          </Typography>
          <PreformattedTypography variant="body1" component="p">
            {project.content}
          </PreformattedTypography>
        </ContextBox>
        <ContextBox>
          <ProjectImages images={project.images} title={project.title} />
        </ContextBox>
      </ImageStack>
    </Box>
  );
}
