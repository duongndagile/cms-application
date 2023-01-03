import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./constant/theme";
import { AppRoutes } from "./routes";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
