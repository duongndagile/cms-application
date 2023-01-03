import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const BeforeAuthentication = () => {
  return (
    <Box display="flex" columnGap={2} justifyContent="center">
      <Link to="/onboarding/signin">Đăng nhập</Link>
      <Link to="/onboarding/signup">Đăng ký</Link>
    </Box>
  );
};

export default BeforeAuthentication;
