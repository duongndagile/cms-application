import { Typography } from "@mui/material";
import { Box } from "@mui/material";

import styles from "./signup.module.css";
import { TextField } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Box width={500} className={styles.signInContainer}>
      <Typography variant="h4">Đăng ký</Typography>
      <Box
        component="form"
        // onSubmit={handleSubmit}
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
        />
        <TextField
          required
          id="password"
          label="Mật khẩu"
          name="password"
          type="password"
        />
        <Button variant="contained" color="info" type="submit">
          <Link to="/onboarding/signin">
            <Typography typography="h6" color="#FFF">
              Đăng ký
            </Typography>
          </Link>
        </Button>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link to="/onboarding/signin" color="#3792CB">
              {"Đã có tài khoản? Đăng nhập"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default SignUp;
