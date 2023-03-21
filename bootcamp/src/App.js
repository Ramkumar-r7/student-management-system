import { ThemeProvider } from "@emotion/react";
import "./App.scss";
import RoutingpPage from "./Routes/RoutingpPage";
import { customTheme } from "./Theme/customTheme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <RoutingpPage />
      </ThemeProvider>
    </>
  );
};

export default App;
