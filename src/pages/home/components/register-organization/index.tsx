import { Button, Checkbox, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Form, { Field, useForm } from "rc-field-form";
import { registerOrganization } from "../../services";
import styles from "./index.module.css";

const Organization = () => {
  const [form] = useForm();
  const handleSubmit = (values: any) => {
    registerOrganization(values.name);
  };
  return (
    <Box width={685} className={styles.registerContainer}>
      <Typography variant="h4" textAlign="left">
        Đăng ký trở thành đối tác của Mini Center
      </Typography>
      <Typography textAlign="left" marginTop={2} marginBottom={4}>
        Đăng ký miễn phí trọn đời
      </Typography>
      <Form form={form} onFinish={(values) => handleSubmit(values)}>
        <Box className={styles.boxInput}>
          <Field name="name">
            <TextField
              required
              id="name"
              label="Tên Công Ty"
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
              fullWidth
              required
              id="email"
              label="Email"
              className={styles.inputStyle}
            />
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

        <Button variant="contained" color="info" type="submit">
          <Typography typography="h6" color="#FFF" padding={2}>
            Đăng ký
          </Typography>
        </Button>
      </Form>
    </Box>
  );
};

export default Organization;
