import { NavLink, useLocation } from "react-router-dom";
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
});

const ImageStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
  },
  justifyContent: "center",
  alignItems: "center",
  margin: "1% 1%",
  gap: "5%",
}));

const ContextBox = styled(Box)({
  height: "50vh",
  width: "50%",
  overflowY: "auto",
  padding: 2,
  margin: "1% 1%",
});

const PreformattedTypography = styled(Typography)({
  textAlign: "justify",
  whiteSpace: "pre-wrap",
  margin: "0% 2% 0% 0%",
});

function Project() {
  const location = useLocation();

  function ProjectImages({ images, title }) {
    return (
      <ImageList sx={{ width: 426, height: "50vh" }} cols={1}>
        {images.map((link, idx) => (
          <ImageListItem key={idx} sx={{ margin: "1%" }}>
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
            {location.state.title}
            <Divider orientation="horizontal" variant="fullWidth" />
          </Typography>
          <PreformattedTypography variant="body1" component="p">
            {location.state.content}
          </PreformattedTypography>
        </ContextBox>
        <ProjectImages
          images={location.state.images}
          title={location.state.title}
        />
      </ImageStack>
    </Box>
  );
}

export default Project;
