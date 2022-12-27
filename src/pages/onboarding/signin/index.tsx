import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const SignIn = ({
  setAuthorized,
}: {
  setAuthorized: (value: boolean) => void;
}) => {
  const handleSubmit = () => {
    setAuthorized(true);
  };
  return (
    <Box width={500}>
      <Typography variant="h4">Sign In</Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        mt={4}
        display="flex"
        flexDirection="column"
        noValidate
        rowGap={2}
      >
        <TextField
          required
          id="username"
          label="Username"
          name="username"
          autoFocus
        />
        <TextField
          required
          id="password"
          label="Password"
          name="password"
          autoFocus
          type="password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" />}
          label="Remember me"
          sx={{
            width: "160px",
          }}
        />
        <Button variant="contained" color="info" type="submit">
          Sign In
        </Button>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="#" variant="subtitle2" color="#45b6fe">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="subtitle2" color="#45b6fe">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignIn;
