import { useState } from "react";
import {
  Box,
  Typography,
  FormLabel,
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
  styled,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import SectionTitle from "../components/SectionTitle";
import { Subject } from "@mui/icons-material";

const ContactBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const ContactForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "2% 2%",
});

const StyledTextField = styled(TextField)({
  width: "50%",
  margin: "0% 0% 2% 0%",
});

function Contact() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isLoading },
  } = useForm();
  const [info, setInfo] = useState("Default Value");

  async function handleForm(formData) {
    var template = {
      subject: formData.subject,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    console.log(formData);
    try {
      emailjs
        .send(
          "service_brf6bef",
          "template_6kcj0nl",
          template,
          "YeNzxqOycwj6RTqvx"
        )
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } catch (error) {
      setError("password", { message: error.message });
    }
  }

  return (
    <ContactBox>
      <SectionTitle variant="h4">Contact Me</SectionTitle>
      <ContactForm component="form" onSubmit={handleSubmit(handleForm)}>
        <StyledTextField
          {...register("subject", { required: "true" })}
          variant="outlined"
          label="Subject"
          type="text"
          placeholder="Subject"
        />
        <StyledTextField
          {...register("name", { required: "true" })}
          variant="outlined"
          label="Name"
          type="text"
          placeholder="Name"
        />
        <StyledTextField
          {...register("email", {
            register: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must includes @";
              }
              return true;
            },
          })}
          variant="outlined"
          label="Email"
          type="email"
          placeholder="Email"
        />
        <StyledTextField
          id="outlined-multiline-static"
          {...register("message", { required: "true" })}
          variant="outlined"
          label="Message"
          multiline
          rows={6}
          defaultValue={`Hello,\n\nPlease describe your message here in detail...\n\nBest regards,`}
        />
        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={isSubmitting}
          sx={{ width: "20%", fontSize: "1.25rem", padding: "0.75rem" }}
        >
          {isSubmitting ? "Loading..." : "Send Message"}
        </Button>
      </ContactForm>
    </ContactBox>
  );
}

export default Contact;
