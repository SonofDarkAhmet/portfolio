import type React from "react";
import { Backdrop, Box, Modal, Fade, Typography, styled } from "@mui/material";

import type { Project } from "../../data";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
});

const ModalCard = styled(Box)({
  width: "720px",
  maxWidth: "100%",
  maxHeight: "80vh",
  overflow: "auto",
  background: "var(--surface-raised)",
  border: "1px solid var(--border-strong)",
  borderRadius: "var(--radius-lg)",
  boxShadow: "var(--shadow-raised)",
});

const ModalImage = styled("img")({
  width: "100%",
  height: "280px",
  objectFit: "cover",
  display: "block",
});

const ModalBody = styled(Box)({
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});

const ModalHeader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
});

const ModalTitle = styled(Typography)({
  fontSize: "var(--text-h2)",
  fontWeight: "var(--fw-h2)",
  color: "var(--text-primary)",
});

const CloseButton = styled("button")({
  cursor: "pointer",
  fontSize: "20px",
  color: "var(--text-muted)",
  background: "none",
  border: "none",
  padding: 0,
  lineHeight: 1,
});

const ModalDescription = styled(Typography)({
  fontSize: "14px",
  color: "var(--accent-primary)",
});

const ModalContent = styled(Typography)({
  fontSize: "15px",
  lineHeight: 1.7,
  color: "var(--text-secondary)",
  textAlign: "justify",
  whiteSpace: "pre-wrap",
});

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps): React.ReactElement {
  return (
    <StyledModal
      open={project !== null}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 400,
          sx: {
            backgroundColor: "rgba(5,7,11,0.88)",
            backdropFilter: "blur(6px)",
          },
        },
      }}
    >
      <Fade in={project !== null}>
        <ModalCard onClick={(e) => e.stopPropagation()}>
          {project && (
            <>
              <ModalImage src={project.images[0]} alt={project.title} />
              <ModalBody>
                <ModalHeader>
                  <ModalTitle>{project.title}</ModalTitle>
                  <CloseButton onClick={onClose} aria-label="Close">
                    ✕
                  </CloseButton>
                </ModalHeader>
                <ModalDescription>{project.description}</ModalDescription>
                <ModalContent>{project.content}</ModalContent>
              </ModalBody>
            </>
          )}
        </ModalCard>
      </Fade>
    </StyledModal>
  );
}
