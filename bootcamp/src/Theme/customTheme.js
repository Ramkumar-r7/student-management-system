import { capitalize } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#1D366F",
    },
  },
  typography: {
    button: {
      textTransform: capitalize,
      fontFamily: "Open Sans",
      fontWeight: "600",
    },
  },
});
