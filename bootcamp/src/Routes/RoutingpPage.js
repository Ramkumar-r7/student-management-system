import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import FaqPage from "../Components/FaqPage/faqPage";
import GuestCoursePage from "../Components/GuestCoursePage/guestCoursePage";
import LandingPage from "../Components/LandingPage/landingPage";
import LoginPage from "../Components/LoginPage/loginPage";
import Navbar from "../Components/Navbar/navbar";
import RegisterForm from "../Components/RegisterPage/registerForm";
import Dashboard from "../Components/Dashboard/dashboard";
import CourseEnrollDetails from "../Components/CourseEnrollDetails/courseEnrollDetails";
import ForumPage from "../Components/ForumPage/forumPage";
const RoutingpPage = () => {
  const isAuthenicated = useSelector((state) => state.authReducer.auth);

  const location = useLocation();
  let param = location.pathname;
  return (
    <>
      <Navbar isAuthenicated={isAuthenicated} isParam={param} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterForm />} />
        <Route exact path="/courses" element={<GuestCoursePage />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route exact path="/forum" element={<ForumPage />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/details" element={<CourseEnrollDetails />} />
      </Routes>
    </>
  );
};

export default RoutingpPage;
