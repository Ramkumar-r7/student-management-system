import React from "react";
import CourseCard from "./CourseCard/courseCard";
import CourseCategoryDropdown from "./CourseCategoryDropdown/courseCategoryDropdown";
import "./courseDisplayPage.scss";

const CourseDisplayPage = () => {
  return (
    <div id="courseDisplayPage">
      <CourseCategoryDropdown />
      <CourseCard />
    </div>
  );
};

export default CourseDisplayPage;
