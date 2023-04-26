import React, { useState } from "react";
import "./courseTabHeader.scss";
import { Box, Tabs, Tab } from "@mui/material";
import CourseSyllabus from "../CourseSyllabus/courseSyllabus";
import CourseOverview from "../CourseOverview/courseOverview";
import CourseForumQandA from "../CourseForum/CourseForumQandA/courseForumQandA";
import CourseFaq from "../CourseFaq/courseFaq";

const CourseTabHeader = ({ isAuthenticated, isEnrolled }) => {
  const [tabActive, setTabActive] = useState(0);
  const handleTabIndicatorChange = (event, newValue) => {
    setTabActive(newValue);
  };

  return (
    <div id="courseTabHeader">
      <Box className="course-syllabus-box">
        <Box className="course-syllabus-container">
          <Tabs
            value={tabActive}
            onChange={handleTabIndicatorChange}
            className="tabs"
          >
            <Tab label="Syllabus" value={0} />
            <Tab label="Overview" value={1} />
            {isEnrolled ? <Tab label="Forum" value={2} /> : null}
            {isEnrolled ? <Tab label="FAQ" value={3} /> : null}
          </Tabs>
        </Box>
      </Box>
      {tabActive === 0 && <CourseSyllabus />}
      {tabActive === 1 && <CourseOverview />}
      {tabActive === 2 && <CourseForumQandA />}
      {tabActive === 3 && <CourseFaq />}
    </div>
  );
};

export default CourseTabHeader;
