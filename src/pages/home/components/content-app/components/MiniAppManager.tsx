import { Box, Button, Checkbox } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const rows = [
  {
    version: "version 1.0.0",
    createdAt: "2020-01-01",
    id: 1,
    isActive: false,
    kd: "ABC",
    status: "abc",
    updatedAt: "2021-10-21",
    name: "XYZ",
  },
  {
    version: "version 1.1.0",
    createdAt: "2020-06-01",
    id: 2,
    isActive: false,
    kd: "ABC",
    status: "abc",
    updatedAt: "2021-10-21",
    name: "XYZ",
  },
  {
    version: "version 1.2.0",
    createdAt: "2021-01-01",
    id: 3,
    isActive: false,
    kd: "ABC",
    status: "abc",
    updatedAt: "2021-10-21",
    name: "XYZ",
  },
  {
    version: "version 2.0.0",
    createdAt: "2022-01-01",
    id: 4,
    isActive: false,
    kd: "ABC",
    status: "abc",
    updatedAt: "2021-10-21",
    name: "XYZ",
  },
  {
    version: "version 2.1.0",
    createdAt: "2022-06-01",
    id: 5,
    isActive: true,
    kd: "ABC",
    status: "abc",
    updatedAt: "2021-10-21",
    name: "XYZ",
  },
];

export const MiniAppManager = () => {
  const columns: GridColDef[] = [
    { field: "name", headerName: "Tên", width: 150 },
    { field: "createdAt", headerName: "Ngày tạo", width: 150 },
    { field: "updatedAt", headerName: "Ngày cập nhật", width: 150 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "version", headerName: "Version", width: 100 },
    // {
    //   field: "isActive",
    //   headerName: "Active",
    //   width: 100,
    //   renderCell: (params) => (
    //     <Checkbox
    //       checked={params.row?.isActive} //params.row?.isActive
    //       onChange={() => handleShowModalConfirm(params.row.id)}
    //     />
    //   ),
    // },
    { field: "kd", headerName: "Người kiểm duyệt", width: 200 },
  ];

  // const [active, setActive] = useState<boolean>(false);

  // const handleShowModalConfirm = (idRow: any) => {
  //   console.log(idRow);
  //   const id = rows.map((row: any) => row.id);
  //   if (idRow === id) {
  //     setActive(!active);
  //   }
  // };
  const handleUploadVersion = () => {
    console.log("upload file");
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
