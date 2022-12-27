import { Box, Button, Grid, Typography, Tabs, Tab } from "@mui/material";
import styles from "./home.module.css";

const HomePage = () => {
  return (
    <Grid
      container
      spacing={2}
      width="1024px"
      display="flex"
      justifyContent="space-between"
      className={styles.container}
    >
      <Grid xs={4} md={4} lg={2} className={styles.contentLeft}>
        <Typography>CMS Application Logo</Typography>
      </Grid>
      <Grid xs={8} md={8} lg={6}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          className={styles.contentRight}
        >
          <Typography>Username</Typography>
          <Button>Log out</Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
