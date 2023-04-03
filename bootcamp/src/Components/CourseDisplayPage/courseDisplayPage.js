import React from "react";
import CourseCard from "./CourseCard/courseCard";
import CourseCategoryDropdown from "./CourseCategoryDropdown/courseCategoryDropdown";
import "./courseDisplayPage.scss";
const CourseDisplayPage = () => {
  return (
    <div id="courseDisplayPage">
      <CourseCategoryDropdown />
      <span
        style={{
          fontFamily: "Open Sans",
          color: "#262626",
          fontWeight: 500,
          fontSize: "13px",
        }}
      >
        23 Courses
      </span>
      <CourseCard />
    </div>
  );
};

export default CourseDisplayPage;
