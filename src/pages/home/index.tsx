import { Box, Button, Grid, Typography, Paper, styled } from "@mui/material";
import styles from "./home.module.css";
import MiniAppContent from "./components/content-miniapp";
import { useNavigate } from "react-router-dom";
import { getAccessToken, removeToken } from "../../apis/connection.instance";
import BeforeAuthentication from "./components/content-before-authen";
import { serviceUserProfile } from "./services";
import { Suspense, useEffect, useState } from "react";
// import Organization from "./components/register-organization";
import Sidebar from "../../components/app-menu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  const [profile, setProfile] = useState<any>("");
  const isLogin = getAccessToken();
  const history = useNavigate();
  useEffect(() => {
    if (isLogin) {
      serviceUserProfile().then((user_profile: any) => {
        setProfile(user_profile?.data);
      });
    }
  }, []);

  const full_name =
    profile?.user_profile?.last_name + profile?.user_profile?.first_name;
  const handleLogout = () => {
    removeToken();
    history("/");
  };
  if (!isLogin) {
    return <BeforeAuthentication />;
  }
  if (!profile) {
    return <Suspense fallback={<>Loading...</>} />;
  }
  return (
    <>
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="space-between"
        className={styles.container}
      >
        <Grid xs={2} className={styles.contentLeft}>
          <Box className={styles.logoContent}>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              sx={{ ml: 2 }}
            >
              <Box>Avatar</Box>
              <Box textAlign="left" sx={{ ml: 2 }}>
                <Typography typography="subtitle1">{full_name}</Typography>
                <Typography typography="body3">
                  {profile?.role?.name}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Sidebar />
        </Grid>
        <Grid xs={10}>
          <Box className={styles.contentRight}>
            <Box
              display="flex"
              alignItems="center"
              columnGap={1}
              className={styles.username}
            >
              <Typography>{profile?.role?.name}: </Typography>
              <Typography color="#3792CB">{`${profile?.user_profile?.last_name} ${profile?.user_profile?.first_name}`}</Typography>
            </Box>
            <Button onClick={handleLogout}>
              <Typography className={styles.textLogout}>Đăng xuất</Typography>
              {/* <img src={iconLogout} /> */}
            </Button>
          </Box>
          <MiniAppContent />
        </Grid>
      </Grid>
      {/* <Organization /> */}
    </>
  );
};

export default HomePage;
