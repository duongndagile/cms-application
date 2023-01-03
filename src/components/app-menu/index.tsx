import { Box, Icon, Tab, Tabs, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import styles from "./menu.module.css";
import MiniAppContent from "../../pages/home/components/content-app";
import { ROUTE_PATH } from "../../utils/common";
import BarChartIcon from "@mui/icons-material/BarChart";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AppsIcon from "@mui/icons-material/Apps";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import DescriptionIcon from "@mui/icons-material/Description";
import HelpIcon from "@mui/icons-material/Help";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className={styles.tabPanelStyle}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Sidebar = (profile: any) => {
  const [idActive, setIdActiveTab] = useState<number>(222);
  const MENU = useMemo(() => {
    return [
      {
        id: 1,
        label: "Tổng quan",
        children: [
          {
            id: 11,
            label: "Thống kê",
            icon: <BarChartIcon />,
            iconActive: <BarChartIcon color="info" />,
            role: "USER",
            path: ROUTE_PATH.STATISTIC,
          },
          {
            id: 111,
            label: "Chưa biết để thêm gì",
            icon: <HelpIcon />,
            iconActive: <HelpIcon color="info" />,
            role: "USER",
            path: "some-things",
          },
        ],
      },
      {
        id: 2,
        label: "Sản phẩm",
        children: [
          {
            id: 22,
            label: "Quản lý Organization",
            icon: <CorporateFareIcon />,
            iconActive: <CorporateFareIcon color="info" />,
            role: "ADMIN",
            path: ROUTE_PATH.ORGANIZATION,
          },
          {
            id: 222,
            label: "Quản lý Mini App",
            icon: <AppsIcon />,
            iconActive: <AppsIcon color="info" />,
            role: "ADMIN",
            path: ROUTE_PATH.MINI_APP,
          },
          {
            id: 2222,
            label: "Quản lý Mini Bundle",
            icon: <BuildCircleIcon />,
            iconActive: <BuildCircleIcon color="info" />,
            role: "ADMIN",
            path: ROUTE_PATH.MINI_BUNDLE,
          },
          {
            id: 22222,
            label: "Hướng dẫn sử dụng",
            icon: <DescriptionIcon />,
            iconActive: <DescriptionIcon color="info" />,
            role: "USER",
            path: ROUTE_PATH.USER_MANUAL,
          },
        ],
      },
    ];
  }, []);
  const handleChange = (e: any, newValue: number) => {
    setIdActiveTab(newValue);
  };

  const item = useMemo(() => {
    return (
      <>
        {MENU.map((menu) => {
          return (
            <Box key={menu.id}>
              <Typography
                typography="h6"
                textAlign="left"
                sx={{ mt: 4, ml: 2 }}
              >
                {menu.label}
              </Typography>
              <Tabs
                orientation="vertical"
                value={idActive}
                // onChange={handleChange}
              >
                {menu.children.map((child: any) => {
                  const icon =
                    idActive === child.id ? child.iconActive : child.icon;
                  // if (profile?.profile?.role?.name === "USER") {
                  //   if (child.role === "ADMIN") {
                  //     return (child = null);
                  //   }
                  // }
                  return (
                    <Box
                      display="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      marginLeft={4}
                      onClick={() => {
                        setIdActiveTab(child.id);
                      }}
                    >
                      <Box marginTop={2}>{icon}</Box>
                      <Tab
                        key={child.id}
                        sx={{ mt: 2 }}
                        label={
                          <Typography
                            color={
                              idActive === child.id ? "#2F80ED" : "#333333"
                            }
                            fontWeight={idActive === child.id ? 700 : 400}
                          >
                            {child.label}
                          </Typography>
                        }
                        value={child.id}
                        className={styles.tabStyle}
                        {...a11yProps(child.id)}
                      />
                    </Box>
                  );
                })}
              </Tabs>
            </Box>
          );
        })}
        <TabPanel value={idActive} index={idActive}>
          <MiniAppContent value={idActive} profile={profile} />
        </TabPanel>
      </>
    );
  }, [idActive]);
  return <Box className={styles.itemContainer}>{item}</Box>;
};

export default Sidebar;
