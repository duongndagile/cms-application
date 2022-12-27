import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3792CB",
    },
  },
  typography: {
    allVariants: {
      fontFamily: "Public Sans",
      textTransform: "none",
      fontWeight: "700",
      letterSpacing: "normal",
      color: "#212B36",
    },
    // variants: [
    //   {
    //     props: { variant: "body" },
    //     style: {
    //       fontSize: "20px",
    //       lineHeight: "28px",
    //       fontWeight: "400",
    //     },
    //   },
    // ],
    h1: {
      fontSize: "64px",
      lineHeight: "80px",
    },
    h2: {
      fontSize: "48px",
      lineHeight: "64px",
    },
    h3: {
      fontSize: "32px",
      lineHeight: "48px",
    },
    h4: {
      fontSize: "24px",
      lineHeight: "36px",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: "500",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "28px",
    },
    subtitle1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "600",
    },
    subtitle2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "600",
    },
    body1: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "400",
    },
    body2: {
      fontSize: "14px",
      lineHeight: "22px",
      fontWeight: "400",
    },
    caption: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: "400",
    },
    overline: {
      fontSize: "12px",
      lineHeight: "18px",
      fontWeight: "700",
      letterSpacing: 1.1,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      variants: [
        // {
        //   props: { variant: "blue" },
        //   style: {
        //     textTransform: "none",
        //     backgroundColor: "#1890FF",
        //     color: "#fff",
        //     boxShadow: "0px 8px 16px rgba(51, 102, 255, 0.24)",
        //     "&:hover": {
        //       backgroundColor: "#1890FF",
        //       boxShadow: "0px 8px 16px rgba(51, 102, 255, 0.24)",
        //       opacity: 0.75,
        //     },
        //   },
        // },
        // {
        //   props: { size: "extralarge" },
        //   style: {
        //     height: "56px",
        //     fontSize: "15px",
        //     lineHeight: "26px",
        //     fontWeight: "700",
        //   },
        // },
        {
          props: { size: "large" },
          style: {
            height: "48px",
            fontSize: "15px",
            lineHeight: "26px",
            fontWeight: "700",
          },
        },
        {
          props: { size: "medium" },
          style: {
            height: "36px",
            fontSize: "14px",
            lineHeight: "24px",
            fontWeight: "700",
          },
        },
        {
          props: { size: "small" },
          style: {
            height: "30px",
            fontSize: "13px",
            lineHeight: "22px",
            fontWeight: "700",
          },
        },
        {
          props: { variant: "contained" },
          style: {
            boxShadow: "0px 4px 8px #B1F2FF",
            "&:hover": {
              opacity: 0.75,
              backgroundColor: "#3792CB",
              boxShadow: "0px 4px 8px #B1F2FF",
            },
          },
        },
      ],
    },
  },
});
