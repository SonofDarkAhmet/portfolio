import { useState } from "react";
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Typography,
  IconButton,
  Snackbar,
  Alert,
  styled,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";

const ModalShareLink = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ModelBox = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
});

const TextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "85%",
  minHeight: "2rem",
  backgroundColor: "black",
  border: "0.2rem solid orange",
  borderRadius: "1rem",
  wordBreak: "break-word",
  whiteSpace: "normal",
  padding: "1% 2%",
  cursor: "pointer",
}));

const ModalCancelIcon = styled(CancelPresentationIcon)({
  position: "absolute",
  right: "1.5rem",
  top: "-1.2rem",
  cursor: "pointer",
});

function ShareLink(props) {
  const [open, setOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSnackbarClose = () => setSnackbarOpen(false);

  const link =
    props.link ||
    "https://raifkaraahmetoglu.netlify.app/sdajdkawildjaopweoawjdiawjdklzsjfopapkwdajwdijwapodkawkdisdfhdhgsopfdosk";

  function handleCopyLink() {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setSnackbarOpen(true);
      })
      .catch((error) => {
        console.error("Failed to copy link: ", error);
      });
  }

  return (
    <>
      <IconButton aria-label="share" onClick={handleOpen}>
        <ShareIcon />
      </IconButton>
      <ModalShareLink
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModelBox>
            <ModalCancelIcon onClick={handleClose} />
            <TextBox onClick={handleCopyLink}>
              <Typography
                id="transition-modal-title"
                variant="body1"
                color="secondary"
              >
                {link}
              </Typography>
            </TextBox>
          </ModelBox>
        </Fade>
      </ModalShareLink>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}

export default ShareLink;
