import { useState } from "react";
import {
  Box,
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
import { useForm } from "react-hook-form";

const ContactBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
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
      console.log(isSubmitting);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setError("password", { message: "This email is already taken" });
    }
  }

  return (
    <ContactBox component="form" onSubmit={handleSubmit(handleForm)}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          gap: "2px",
          margin: "2%",
        }}
      >
        <TextField
          {...register("name", { required: "true" })}
          variant="outlined"
          type="text"
          placeholder="Name"
        />
        <TextField
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
          type="email"
          placeholder="Email"
        />
        <TextField
          {...register("password")}
          variant="outlined"
          type="password"
          placeholder="password"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
        <Button type="submit" variant="outlined" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Send Message"}
        </Button>
      </Box>
    </ContactBox>
  );
}

export default Contact;
