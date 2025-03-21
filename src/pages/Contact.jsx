import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography, TextField, Button, styled } from "@mui/material";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";
import SectionTitle from "../components/SectionTitle";

const ContactBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "70vh",
});

const ContactForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "5% 5%",
});

const StyledTextField = styled(TextField)({
  width: "70%",
  margin: "0% 0% 2% 0%",
});

const StyledButton = styled(Button)({
  flexShrink: 1,
  color: "#24262e",
  backgroundColor: "rgb(240, 242, 245)",
  border: "none",
  borderRadius: "1em",
});

const ButtonTypography = styled(Typography)({
  fontWeight: "400",
});

const schema = z.object({
  subject: z.string().min(3),
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
});

function Contact(props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isLoading },
  } = useForm({
    resolver: zodResolver(schema),
  });

  async function handleForm(formData) {
    var template = {
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
    } catch (error) {
      setError("name", { message: error.message });
    }
  }

  return (
    <ContactBox ref={props.ref}>
      <SectionTitle variant="h4">Contact Me</SectionTitle>
      <ContactForm component="form" onSubmit={handleSubmit(handleForm)}>
        <StyledTextField
          {...register("subject")}
          variant="outlined"
          label="Subject"
          type="text"
          placeholder="Subject"
          error={Boolean(errors.subject)}
          helperText={errors.subject?.message}
        />
        <StyledTextField
          {...register("name")}
          variant="outlined"
          label="Name"
          type="text"
          placeholder="Name"
          error={Boolean(errors.name)}
          helperText={errors.name?.message}
        />
        <StyledTextField
          {...register("email")}
          variant="outlined"
          label="Email"
          type="email"
          placeholder="Email"
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        />
        <StyledTextField
          id="outlined-multiline-static"
          {...register("message")}
          variant="outlined"
          label="Message"
          multiline
          rows={6}
          placeholder={`Hello,\n\nPlease describe your message here in detail...\n\nBest regards,`}
          error={Boolean(errors.message)}
          helperText={errors.message?.message}
        />
        <StyledButton
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={isSubmitting}
          sx={{ fontSize: "1rem", padding: "0.75rem" }}
        >
          <ButtonTypography>
            {isSubmitting ? "Loading..." : "Send Message"}
          </ButtonTypography>
        </StyledButton>
      </ContactForm>
    </ContactBox>
  );
}

export default Contact;
