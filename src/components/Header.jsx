import { Padding } from "@mui/icons-material";
import { AppBar, Toolbar, Stack, Button, Typography } from "@mui/material";

const styles = {
  appBar: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: "1rem",
  },
  toolBar: {
    justifyContent: "center",
    width: 600,
    minWidth: 550,
    borderRadius: "2rem",
    boxShadow:
      "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)",
  },
  buttons: {
    color: "#37474f",
    height: "2rem",
    border: "1px solid #222",
    borderRadius: "1rem",
  },
};

function Header() {
  return (
    <AppBar
      component="nav"
      position="fixed"
      color="transparent"
      elevation={0}
      style={styles.appBar}
    >
      <Toolbar style={styles.toolBar}>
        <Stack display="flex" direction="row" spacing={4}>
          <Button variant="outlined" sx={styles.buttons}>
            <Typography>Home</Typography>
          </Button>
          <Button variant="outlined" sx={styles.buttons}>
            <Typography>Skills</Typography>
          </Button>
          <Button variant="outlined" sx={styles.buttons}>
            <Typography>Projects</Typography>
          </Button>
          <Button variant="outlined" sx={styles.buttons}>
            <Typography>Contacts</Typography>
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
