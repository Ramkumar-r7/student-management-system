import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaqPage from "../Components/FaqPage/faqPage";
import GuestCoursePage from "../Components/GuestCoursePage/guestCoursePage";
import LandingPage from "../Components/LandingPage/landingPage";
import LoginPage from "../Components/LoginPage/loginPage";
import Navbar from "../Components/Navbar/navbar";
import RegisterForm from "../Components/RegisterPage/registerForm";

const RoutingpPage = () => {
  const isAuthenicated = useSelector((state) => state.authReducer.auth);

  return (
    <>
      <BrowserRouter>
        <Navbar isAuthenicated={isAuthenicated} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/courses" element={<GuestCoursePage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutingpPage;
