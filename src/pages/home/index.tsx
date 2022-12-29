import { Box, Button, Grid, Typography, Paper, styled } from "@mui/material";
import styles from "./home.module.css";
import MiniAppContent from "./components/content-miniapp";
import { useNavigate } from "react-router-dom";
import { getAccessToken, removeToken } from "../../apis/connection.instance";
import BeforeAuthentication from "./components/content-before-authen";
import { serviceUserProfile } from "./services";
import { Suspense, useEffect, useState } from "react";
import Organization from "./components/register-organization";

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
        width="1024px"
        display="flex"
        justifyContent="space-between"
        className={styles.container}
      >
        <Grid xs={2} className={styles.contentLeft}>
          <Item className={styles.logoContent}>
            <Typography>Application Logo</Typography>
          </Item>
          <Typography margin={[2]}>Mini App</Typography>
        </Grid>
        <Grid xs={10}>
          <Item className={styles.contentRight}>
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
              <Typography margin={1} className={styles.textLogout}>
                Đăng xuất
              </Typography>
              {/* <img src={iconLogout} /> */}
            </Button>
          </Item>
          <MiniAppContent />
        </Grid>
      </Grid>
      <Organization />
    </>
  );
};

export default HomePage;
