import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import emailjs from "@emailjs/browser";

import SectionTitle from "../components/SectionTitle";

const ContactBox = styled(Box)({
  padding: "40px 80px 110px",
  maxWidth: "var(--content-narrow)",
  margin: "0 auto",
});

const ContactCard = styled(Box)({
  background: "var(--surface-card)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-lg)",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const ContactForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    color: "var(--text-primary)",
    borderRadius: "var(--radius-sm)",
    "& fieldset": {
      borderColor: "var(--border-subtle)",
    },
    "&:hover fieldset": {
      borderColor: "var(--border-strong)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--accent-primary)",
    },
  },
  "& .MuiInputLabel-root": {
    color: "var(--text-muted)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--accent-primary)",
  },
});

const SubmitButton = styled(Button)({
  alignSelf: "center",
  borderRadius: "var(--radius-pill)",
  borderColor: "var(--border-strong)",
  color: "var(--text-primary)",
  padding: "10px 28px",
  fontWeight: 500,
  textTransform: "none",
  "&:hover": {
    borderColor: "var(--accent-primary)",
    color: "var(--accent-primary)",
  },
});

const SuccessMessage = styled(Typography)({
  fontSize: "14px",
  color: "var(--text-secondary)",
});

const schema = z.object({
  subject: z.string().min(3),
  name: z.string().min(1),
  email: z.email(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof schema>;

type ContactProps = {
  sectionRef: React.RefObject<HTMLDivElement | null>;
};

function Contact({ sectionRef }: ContactProps): React.ReactElement {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const handleForm = async (formData: ContactFormData): Promise<void> => {
    const template = {
      subject: formData.subject,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        template,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (error) {
      setError("name", {
        message: error instanceof Error ? error.message : "Failed to send message",
      });
    }
  };

  return (
    <ContactBox id="contact" ref={sectionRef}>
      <ContactCard>
        <SectionTitle variant="h4">Contact</SectionTitle>

        {submitted ? (
          <SuccessMessage>
            Thanks — your message has been sent. I&apos;ll get back to you soon.
          </SuccessMessage>
        ) : (
          <ContactForm
            // @ts-expect-error MUI v9 styled(Box) drops the polymorphic `component` prop from its type
            component="form"
            onSubmit={handleSubmit(handleForm)}
          >
            <StyledTextField
              {...register("subject")}
              variant="outlined"
              label="Subject"
              type="text"
              error={Boolean(errors.subject)}
              helperText={errors.subject?.message}
            />

            <StyledTextField
              {...register("name")}
              variant="outlined"
              label="Name"
              type="text"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
            />

            <StyledTextField
              {...register("email")}
              variant="outlined"
              label="Email"
              type="email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />

            <StyledTextField
              {...register("message")}
              variant="outlined"
              label="Message"
              multiline
              rows={5}
              error={Boolean(errors.message)}
              helperText={errors.message?.message}
            />

            <SubmitButton type="submit" variant="outlined" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send message"}
            </SubmitButton>
          </ContactForm>
        )}
      </ContactCard>
    </ContactBox>
  );
}

export default Contact;
