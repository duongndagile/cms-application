import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import styles from "./menu.module.css";
import MiniAppContent from "../../pages/home/components/content-app";

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

const Sidebar = () => {
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
          },
          {
            id: 111,
            label: "Chưa biết để thêm gì",
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
          },
          {
            id: 222,
            label: "Quản lý Mini App",
          },
          {
            id: 2222,
            label: "Quản lý Mini Bundle",
          },
          {
            id: 22222,
            label: "Hướng dẫn sử dụng",
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
                onChange={handleChange}
              >
                {menu.children.map((child) => {
                  return (
                    <Tab
                      key={child.id}
                      sx={{ ml: 1, mt: 2 }}
                      label={child.label}
                      value={child.id}
                      className={styles.tabStyle}
                      {...a11yProps(child.id)}
                      // onClick={() => setIdActiveTab(child.id)}
                    />
                  );
                })}
              </Tabs>
            </Box>
          );
        })}
        <TabPanel value={idActive} index={idActive}>
          <MiniAppContent value={idActive} />
        </TabPanel>
      </>
    );
  }, [idActive]);
  return <Box className={styles.itemContainer}>{item}</Box>;
};

export default Sidebar;
