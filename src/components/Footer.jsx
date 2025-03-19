import {
  Box,
  Stack,
  Typography,
  IconButton,
  useTheme,
  styled,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterBox = styled(Box)({
  padding: "1% 2% 1% 2%",
  borderRadius: "0px 0px 5px 5px",
  backgroundColor: "rgb(3, 3, 3)", // This is equivalent to bg-neutral-950 (dark background)
  backgroundImage:
    "radial-gradient(ellipse 80% 80% at 50% -20%,rgba(120,119,198,0.3),rgba(255,255,255,0))",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
});

const FooterStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
  },
}));

const IconStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

const StyledIconButton = styled(IconButton)({
  cursor: "pointer", // Change cursor to hand
});

const FooterTypography = styled(Typography)({
  fontWeight: "200", // Equivalent to font-light
  textAlign: "left",
  letterSpacing: "-0.050em", // Tracking tighter
  color: "#D4D4D4",
});

function Footer() {
  const theme = useTheme();

  function iconClick(e) {
    const name = e.currentTarget.name;
    if (name === "linkedin") {
      window.open("https://www.linkedin.com/in/raif-karaahmetoglu", "_blank");
    } else if (name === "github") {
      window.open("https://github.com/SonofDarkAhmet", "_blank");
    }
  }

  return (
    <FooterBox>
      <FooterStack>
        <FooterTypography
          variant="subtitle2"
          sx={{ padding: "0.5%", color: theme.palette.secondary.dark }}
        >
          &#169; 2025 All rights reserved.
        </FooterTypography>
        <FooterTypography sx={{ padding: "0.5%", fontWeight: "400" }}>
          Thanks for visiting! Feel free to connect with me.
        </FooterTypography>
        <IconStack useFlexGap>
          <IconButton name="linkedin" onClick={iconClick}>
            <LinkedInIcon
              fontSize="large"
              sx={{ color: theme.palette.secondary.dark }}
            />
          </IconButton>
          <StyledIconButton name="github" onClick={iconClick}>
            <GitHubIcon
              fontSize="large"
              sx={{ color: theme.palette.secondary.dark }}
            />
          </StyledIconButton>
        </IconStack>
      </FooterStack>
    </FooterBox>
  );
}

export default Footer;
