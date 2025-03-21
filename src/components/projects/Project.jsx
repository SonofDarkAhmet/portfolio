import { projects } from "../../data";
import { NavLink, useLoaderData } from "react-router-dom";
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
  margin: "2% 1%",
  borderRadius: "1rem",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
}));

const PreformattedTypography = styled(Typography)({
  textAlign: "justify",
  whiteSpace: "pre-wrap",
  margin: "0% 2% 0% 0%",
});

function Project() {
  const data = useLoaderData();

  function ProjectImages({ images, title }) {
    return (
      <ImageList cols={1}>
        {images.map((link, idx) => (
          <ImageListItem key={idx}>
            <img
              srcSet={`${link}?w=426&h=426&fit=crop&auto=format&dpr=1 1x`}
              src={`${link}?w=426&h=426&fit=crop&auto=format`}
              alt={`${title}-${idx}`}
              loading="lazy"
              style={{
                objectFit: "contain",
                marginTop: "1rem",
                borderRadius: "1rem",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  }

  return (
    <Box component="">
      <NavLink to="../../" relative="path">
        <ReturnBackTypoGraphy>
          <ArrowBackIcon fontSize="inherit" />
          Return Back
        </ReturnBackTypoGraphy>
      </NavLink>
      <ImageStack useFlexGap>
        <ContextBox>
          <Typography
            variant="h4"
            style={{ display: "inline-block", marginBottom: "2rem" }}
          >
            {data.title}
            <Divider orientation="horizontal" variant="fullWidth" />
          </Typography>
          <PreformattedTypography variant="body1" component="p">
            {data.content}
          </PreformattedTypography>
        </ContextBox>
        <ContextBox>
          <ProjectImages images={data.images} title={data.title} />
        </ContextBox>
      </ImageStack>
    </Box>
  );
}

export default Project;

export function loader({ params }) {
  return projects[params.id - 1];
}
