import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./signin.module.css";
import { useState } from "react";
import { serviceSignIn } from "./services";

const SignIn = () => {
  const [formInput, setFormInput] = useState({
    emailOrPhone: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    serviceSignIn(formInput.emailOrPhone, formInput.password);
    e.preventDefault();
    // alert("a");/
  };

  const handleInputUsername = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const emailOrPhone = e.target.value;
    setFormInput({
      emailOrPhone: emailOrPhone,
      password: formInput.password,
    });
  };
  const handleInputPassword = (e: any) => {
    const password = e.target.value;
    setFormInput({
      emailOrPhone: formInput.emailOrPhone,
      password: password,
    });
  };
  return (
    <Box width={500} className={styles.signInContainer}>
      <Typography variant="h4">Đăng nhập</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        mt={4}
        display="flex"
        flexDirection="column"
        noValidate
        rowGap={2}
        sx={{
          "& .MuiTextField-root": { borderColor: "#03A9F4" },
        }}
      >
        <TextField
          required
          id="username"
          label="Tài khoản"
          name="username"
          autoFocus
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleInputUsername(e)}
        />
        <TextField
          required
          id="password"
          label="Mật khẩu"
          name="password"
          type="password"
          onChange={(
            e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
          ) => handleInputPassword(e)}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="info" />}
          label="Ghi nhớ đăng nhập"
          sx={{
            width: "180px",
          }}
        />
        <Button variant="contained" color="info" type="submit">
          <Typography typography="h6" color="#FFF">
            Đăng nhập
          </Typography>
        </Button>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link to="#">Quên mật khẩu?</Link>
          </Grid>
          <Grid item>
            <Link to="/onboarding/signup">{"Chưa có tài khoản? Đăng ký"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignIn;
