import { Box, styled } from "@mui/material";

const FooterBox = styled(Box)({
  flex: 1,
  borderRadius: "0px 0px 5px 5px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
});

function Footer() {
  return (
    <FooterBox>
      <footer>&#169; 2025</footer>
    </FooterBox>
  );
}

export default Footer;
