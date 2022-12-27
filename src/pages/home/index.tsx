import { Box, Button, Grid, Typography, Paper, styled } from "@mui/material";
import styles from "./home.module.css";
import MiniAppContent from "./components/content-miniapp";
import { Link } from "react-router-dom";
// import iconLogout from "../../assets/svgs/icon-logout.svg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HomePage = ({
  setAuthorized,
}: {
  setAuthorized: (value: boolean) => void;
}) => {
  const handleLogout = () => {
    setAuthorized(false);
  };
  return (
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
            <Typography>User Name: </Typography>
            <Typography color="#3792CB">Nguyen Van A</Typography>
          </Box>
          <Button onClick={handleLogout}>
            <Link to="/onboarding/signin">
              <Typography margin={1} className={styles.textLogout}>
                Đăng xuất
              </Typography>
            </Link>
            {/* <img src={iconLogout} /> */}
          </Button>
        </Item>
        <MiniAppContent />
      </Grid>
    </Grid>
  );
};

export default HomePage;
