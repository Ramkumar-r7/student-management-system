import React, { useState } from "react";
import "./dashboard.scss";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import CourseCard from "../CourseDisplayPage/CourseCard/courseCard";

const Dashboard = () => {
  const [tabIndicator, setTabIndicator] = useState(0);
  const handleTabIndicatorChange = (event, newValue) => {
    setTabIndicator(newValue);
  };

  return (
    <div id="dashboard">
      <Box className="dashboard-box">
        <Typography className="mycourses-header" variant="p">
          My Courses
        </Typography>
        <Tabs value={tabIndicator} onChange={handleTabIndicatorChange}>
          <Tab className="dashboard-tab" value={0} label="All" />
          <Tab className="courseStatus-tab" value={1} label="Inprogress" />
          <Tab className="courseStatus-tab" value={2} label="Completed" />
        </Tabs>
      </Box>
      <Box className="card-box d-flex gap-4">
        {tabIndicator === 0 || tabIndicator === 1 ? <CourseCard /> : null}
        {tabIndicator === 0 || tabIndicator === 2 ? <CourseCard /> : null}
      </Box>
    </div>
  );
};

export default Dashboard;
