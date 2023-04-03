import React, { useState } from "react";
import "./courseSyllabus.scss";
import { Box, Tabs, Tab } from "@mui/material";
import CourseSyllabusTab from "../CourseSyllabusTab/courseSyllabusTab";
import CourseOverview from "../CourseOverview/courseOverview";
import FaqPage from "../../FaqPage/faqPage";
import CourseForumQandA from "../CourseForum/CourseForumQandA/courseForumQandA";


const CourseSyllabus = ({ isAuthenicated }) => {
  const [tabActive, setTabActive] = useState(0);
  const handleTabIndicatorChange = (event, newValue) => {
    setTabActive(newValue);
  };
  console.log(isAuthenicated);
  return (
    <div id="courseSyllabus">
      <Box className="course-syllabus-box">
        <Box className="course-syllabus-container">
          <Tabs
            value={tabActive}
            onChange={handleTabIndicatorChange}
            className="tabs"
          >
            <Tab label="Syllabus" value={0} />
            <Tab label="Overview" value={1} />
            {!isAuthenicated ? <Tab label="Forum" value={2} /> : null}
            {!isAuthenicated ? <Tab label="FAQ" value={3} /> : null}
          </Tabs>
        </Box>
      </Box>
      {tabActive === 0 && <CourseSyllabusTab />}
      {tabActive === 1 && <CourseOverview />}
      {tabActive === 2 && <CourseForumQandA />}
      {tabActive === 3 && <FaqPage />}
    </div>
  );
};

export default CourseSyllabus;
