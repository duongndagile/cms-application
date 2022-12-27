import { useState } from "react";
import "./App.css";
import SignIn from "./pages/onboarding/signin";
import HomePage from "./pages/home";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constant/theme";
import { AppRoutes } from "./routes";

function App() {
  const [authorized, setAuthorized] = useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
