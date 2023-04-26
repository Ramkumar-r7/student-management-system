import React from "react";
import CourseEnrollment from "../CourseEnrollment/courseEnrollment";
import CourseTabHeader from "../CourseTabHeader/courseTabHeader";
import { useSelector } from "react-redux";

const CourseComponents = () => {
  const isAuthenicated = useSelector((state) => state.authReducer.auth);
  const isEnrolled = useSelector((state) => state.authReducer.isEnroll);
  const isLearner = useSelector((state) => state.authReducer.isLearner);
  const isSubmitted = useSelector((state) => state.authReducer.isSubmitted);
  const isEvaluated = useSelector((state) => state.authReducer.isEvaluated);

  return (
    <div>
      <CourseEnrollment
        isAuthenicated={isAuthenicated}
        isEnrolled={isEnrolled}
        isLearner={isLearner}
        isSubmitted={isSubmitted}
        isEvaluated={isEvaluated}
      />
      <CourseTabHeader
        isAuthenticated={isAuthenicated}
        isEnrolled={isEnrolled}
      />
    </div>
  );
};

export default CourseComponents;
