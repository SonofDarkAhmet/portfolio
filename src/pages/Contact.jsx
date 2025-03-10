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
import SectionTitle from "../components/SectionTitle";

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
    try {
      console.log(formData);
      console.log(isSubmitting);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setError("password", { message: "This email is already taken" });
    }
  }

  return (
    <ContactBox>
      <SectionTitle variant="h4">Contact Me</SectionTitle>
      <ContactForm component="form" onSubmit={handleSubmit(handleForm)}>
        <StyledTextField
          {...register("subject")}
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
