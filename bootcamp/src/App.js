import { ThemeProvider } from "@emotion/react";
import "./App.scss";
import RoutingpPage from "./Routes/RoutingpPage";
import { createTheme } from "@mui/material";
import { capitalize } from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const customTheme = createTheme({
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
        borderRadius: "5px",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Router>
        <RoutingpPage  />
      </Router>
    </ThemeProvider>
  );
};

export default App;
