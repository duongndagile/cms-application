import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signin.module.css";
import { useEffect, useState } from "react";
import { signIn } from "./services";
import { validator } from "../../../utils/validate";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { getAccessToken, setToken } from "../../../apis/connection.instance";
import Form, { Field, useForm } from "rc-field-form";
import { useAuthenticationState } from "../../../atoms/authentication";

const regexEmail =
  '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/';

const SignIn = () => {
  const [form] = useForm();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [formInput, setFormInput] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [, setAuthorized] = useAuthenticationState();

  const [validateEmail, setValidateEmail] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    if (formInput.emailOrPhone !== "") {
      setValidateEmail(!!validator(formInput.emailOrPhone, regexEmail));
    }
  }, [formInput.emailOrPhone]);

  const handleToggleShowPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleSubmit = async (values: any) => {
    const formError = form
      .getFieldsError()
      .map((field: any) => field?.errors?.[0]);
    const isHaveError = formError.some((value: boolean) => value === true);
    if (!isHaveError) {
      const res = await signIn({
        emailOrPhone: values.username,
        password: values.password,
      });
      const token = await res.data?.token;
      setToken(token);
      setAuthorized({ authorized: true });
      history("/");
    }
  };

  return (
    <Box width={480} className={styles.signInContainer}>
      <Typography variant="h4" textAlign="left">
        Đăng nhập
      </Typography>
      <Typography textAlign="left" marginTop={1}>
        Trải nghiệm những tính năng tuyệt vời nhất!
      </Typography>
      <Form form={form} onFinish={(values) => handleSubmit(values)}>
        <Field name="username">
          <TextField
            required
            error={validateEmail}
            id="username"
            label="Email hoặc số điện thoại"
            name="username"
            autoFocus
            sx={{ mb: 2, mt: 4 }}
            fullWidth
          />
        </Field>
        <Field name="password">
          <FormControl fullWidth variant="outlined">
            <InputLabel
              htmlFor="password"
              sx={{ bgcolor: "#FFF", pr: 1 }}
              required
            >
              Mật khẩu
            </InputLabel>
            <OutlinedInput
              id="password"
              type={visiblePassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleToggleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {visiblePassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Field>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <FormControlLabel
            control={<Checkbox value="remember" color="info" />}
            label="Lưu mật khẩu"
            sx={{
              width: "180px",
            }}
          />
          <Grid item>
            <Link to="#">
              <Typography color="#0862E5">Quên mật khẩu?</Typography>
            </Link>
          </Grid>
        </Box>
        <Button
          variant="contained"
          color="info"
          type="submit"
          fullWidth
          sx={{ mt: 2, mb: 2 }}
        >
          <Typography typography="h6" color="#FFF">
            Đăng nhập
          </Typography>
        </Button>
        <Box display="flex" columnGap={1}>
          <Typography typography="body1">Bạn chưa có tài khoản?</Typography>
          <Link to="/onboarding/signup">
            <Typography color="#0862E5">Đăng ký</Typography>
          </Link>
        </Box>
      </Form>
    </Box>
  );
};

export default SignIn;
