import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const Sidebar = () => {
  const [idActive, setIdActiveTab] = useState<number | boolean>(false);

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
        <Box sx={{ mt: 8 }}>
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
                        // onClick={() => setIdActiveTab(child.id)}
                      />
                    );
                  })}
                </Tabs>
              </Box>
            );
          })}
        </Box>
      </>
    );
  }, [idActive]);
  return <Box>{item}</Box>;
};

export default Sidebar;
