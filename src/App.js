import React from "react";
import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./Components/LandingPage/landingPage";
import { createTheme, capitalize, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar/navbar";
import CourseDashborad from "./Components/CourseDashboard/courseDashborad";
import DashboardFaq from "./Components/DashboardFaq/dashboardFaq";
import CourseComponents from "./Components/CourseDetails/CourseComponents/courseComponents";
import LoginPage from "./Components/LoginPage/loginPage";
import RegisterForm from "./Components/RegisterPage/registerForm";
import { useSelector } from "react-redux";
import Dashboard from "./Components/Dashboard/dashboard";
import ForumPage from "./Components/ForumPage/forumPage";

const App = () => {
  const location = useLocation();
  let param = location.pathname;

  const isAuthenicated = useSelector((state) => state.authReducer.auth);

  const customTheme = createTheme({
    palette: {
      secondary: {
        main: "#1D366F",
        light: "#fff",
      },
    },
    typography: {
      button: {
        textTransform: capitalize,
        fontFamily: "Open Sans",
        fontWeight: "700",
      },
    },
  });
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar isParam={param} isAuthenicated={isAuthenicated} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<CourseDashborad />} />
        <Route path="/faq" element={<DashboardFaq />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<CourseComponents />} />
        <Route exact path="/forum" element={<ForumPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
