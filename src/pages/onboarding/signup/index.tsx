import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import styles from "./signup.module.css";
import { serviceSignUp } from "./services";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Form, { Field, useForm } from "rc-field-form";

const Input = ({ value = "", ...props }) => (
  <input value={value} {...props} style={{ background: "#FFF" }} />
);

const SignUp = () => {
  const [form] = useForm();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const history = useNavigate();

  const handleToggleShowPassword = () => {
    setVisiblePassword(!visiblePassword);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleSubmit = (values: any) => {
    console.log(values);
    const arrFullName = values?.full_name.split(" ");
    const lastElementOfArrFullName = arrFullName.length - 1;
    const first_name = arrFullName[lastElementOfArrFullName];
    arrFullName.splice(lastElementOfArrFullName, 1);
    const stringLastName = arrFullName.toString();
    const last_name = stringLastName.replaceAll(",", " ");
    const formError = form
      .getFieldsError()
      .map((field: any) => field?.errors?.[0]);
    const isHaveError = formError.some((value: boolean) => value === true);
    if (!isHaveError) {
      serviceSignUp({
        email: values?.email,
        phone: values?.phone,
        first_name: first_name,
        last_name: last_name,
        password: values?.password,
        onSuccess: () => {
          history("/onboarding/signin");
        },
      });
    }
  };

  return (
    <Box width={685} className={styles.signInContainer}>
      <Typography variant="h4" textAlign="left">
        Đăng ký
      </Typography>
      <Typography textAlign="left" marginTop={2} marginBottom={4}>
        Đăng ký miễn phí trọn đời
      </Typography>
      <Form
        form={form}
        onFinish={(values) => handleSubmit(values)}
        className={styles.formStyle}
      >
        <Box className={styles.boxInput}>
          <Field name="full_name">
            <TextField
              required
              id="full_name"
              label="Họ và tên"
              autoFocus
              className={styles.inputStyle}
            />
          </Field>
          <Field name="phone">
            <TextField
              required
              id="phone_number"
              label="Số điện thoại"
              className={styles.inputStyle}
            />
          </Field>
        </Box>
        <Box className={styles.boxInput}>
          <Field name="email">
            <TextField
              required
              id="email"
              label="Email"
              className={styles.inputStyle}
            />
          </Field>
          <Field name="password">
            <FormControl variant="outlined" className={styles.inputStyle}>
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
        </Box>
        {/* <Field name="checkbox"> */}
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Checkbox value="checkbox" color="info" />
          <Typography typography="body2" fontWeight={400}>
            Bằng việc đăng ký tạo website, bạn đã đồng ý với{" "}
            <span className={styles.textCheckbox}>Điều khoản</span> và{" "}
            <span className={styles.textCheckbox}>Chính sách riêng tư</span> của
            chúng tôi
          </Typography>
        </Box>
        {/* </Field> */}

        <Button variant="contained" color="info" type="submit" fullWidth>
          <Typography typography="h6" color="#FFF">
            Đăng ký
          </Typography>
        </Button>
        <Box display="flex" columnGap={1} sx={{ mt: 2 }}>
          <Typography>Đã có tài khoản?</Typography>
          <Link to="/onboarding/signin" color="#3792CB">
            <Typography color="#0862E5">Đăng nhập</Typography>
          </Link>
        </Box>
      </Form>
    </Box>
  );
};
export default SignUp;
