import React from "react";
import CourseDetailed from "./CourseDetailed/courseDetailed";
import CourseSyllabus from "./CourseSyllabus/courseSyllabus";
import { useSelector } from "react-redux";

const CourseEnrollDetails = () => {
  const isAuthenicated = useSelector((state) => state.authReducer.auth);
  console.log(isAuthenicated);
  return (
    <div>
      <CourseDetailed isAuthenicated={isAuthenicated} />
      <CourseSyllabus isAuthenicated={isAuthenicated} />
    </div>
  );
};

export default CourseEnrollDetails;
