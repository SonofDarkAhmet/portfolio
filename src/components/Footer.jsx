import { Box, Stack, Typography, IconButton, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterBox = styled(Box)({
  padding: "1% 2% 1% 2%",
  backgroundColor: "rgb(240, 242, 245)",
  borderRadius: "0px 0px 5px 5px",
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

function Footer() {
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
        <Typography sx={{ padding: "1%" }}>
          &#169; 2025 All rights reserved.
        </Typography>
        <Typography sx={{ padding: "1%" }}>
          Thanks for visiting! Feel free to connect with me.
        </Typography>
        <IconStack useFlexGap>
          <IconButton name="linkedin" onClick={iconClick}>
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <StyledIconButton name="github" onClick={iconClick}>
            <GitHubIcon fontSize="large" />
          </StyledIconButton>
        </IconStack>
      </FooterStack>
    </FooterBox>
  );
}

export default Footer;
