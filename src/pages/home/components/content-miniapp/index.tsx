import { Checkbox, Typography } from "@mui/material";
import { Box, Button } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { getAccessToken } from "../../../../apis/connection.instance";

const rows = [
  { version: "version 1.0.0", createdAt: "2020-01-01", id: 1, isActive: false },
  { version: "version 1.1.0", createdAt: "2020-06-01", id: 2, isActive: false },
  { version: "version 1.2.0", createdAt: "2021-01-01", id: 3, isActive: false },
  { version: "version 2.0.0", createdAt: "2022-01-01", id: 4, isActive: false },
  { version: "version 2.1.0", createdAt: "2022-06-01", id: 5, isActive: true },
];

const MiniAppContent = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleShowModalConfirm = (idRow: any) => {
    console.log(idRow);
    const id = rows.map((row: any) => row.id);
    if (idRow === id) {
      setActive(!active);
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "STT", width: 60 },
    { field: "version", headerName: "Version", width: 200 },
    { field: "createdAt", headerName: "Ngày tạo", width: 200 },
    {
      field: "isActive",
      headerName: "Active",
      width: 100,
      renderCell: (params) => (
        <Checkbox
          checked={params.row?.isActive} //params.row?.isActive
          onChange={() => handleShowModalConfirm(params.row.id)}
        />
      ),
    },
  ];

  const handleUploadVersion = () => {
    const token = getAccessToken();
    console.log("upload file", token);
  };

  return (
    <Box margin={4}>
      <Box
        display="flex"
        justifyContent="flex-end"
        style={{ margin: "0 64px 24px 0" }}
      >
        <Button variant="contained" onClick={handleUploadVersion}>
          Upload New Version
        </Button>
      </Box>
      <div style={{ height: 400, margin: "0 64px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={rows.length}
          rowsPerPageOptions={[5]}
          //   checkboxSelection
          hideFooterSelectedRowCount
        />
      </div>
    </Box>
  );
};

export default MiniAppContent;
