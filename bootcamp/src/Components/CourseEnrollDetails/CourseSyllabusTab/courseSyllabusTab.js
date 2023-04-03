import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
} from "@mui/material";
import React from "react";
import AssignmentIcon from "../../../Assets/images/AssignmentIcon.svg";
import CoursePeriodIcon from "../../../Assets/images/CoursePeriodIcon.svg";
import "./courseSyllabusTab.scss";

const CourseSyllabusTab = () => {
  return (
    <div id="courseSyllabusTab">
      <Box className="course-syllabus">
        <Stack direction="row" spacing={3}>
          <p className="course-detail" variant="p">
            <img src={AssignmentIcon} alt="logo" />
            12 Topics
          </p>
          <p className="course-detail" variant="p">
            <img src={AssignmentIcon} alt="logo" />
            12 Assignments
          </p>
          <p className="course-detail" variant="p">
            <img src={CoursePeriodIcon} alt="logo" />
            12 days
          </p>
        </Stack>

        <Box >
          <Accordion className="accord">
            <AccordionSummary className="d-flex">
              <p className="topic">Topic 1</p>
              <Box className="topic-box">
                <div>
                  <p className="topic-header">Lorem ipsum</p>
                </div>
                <div>
                  <img src={AssignmentIcon} className="task-icon" alt="logo" />
                  <span className="assignment-icon"> 12 Assignments</span>
                  <img
                    src={CoursePeriodIcon}
                    className="time-icon"
                    alt="logo"
                  />
                  <span className="assignment-icon"> 8 days ago</span>
                </div>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A1: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment">Not submitted</span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A2: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment"></span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A3: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment"></span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A4: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment"></span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box>
        <Accordion className="accord">
            <AccordionSummary className="d-flex">
              <p className="topic">Topic 2</p>
              <Box className="topic-box">
                <div>
                  <p className="topic-header">Lorem ipsum</p>
                </div>
                <div>
                  <img src={AssignmentIcon} className="task-icon" alt="logo" />
                  <span className="assignment-icon"> 10 Assignments</span>
                  <img
                    src={CoursePeriodIcon}
                    className="time-icon"
                    alt="logo"
                  />
                  <span className="assignment-icon"> 2 days ago</span>
                </div>
              </Box>
            </AccordionSummary>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A1: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment">Not submitted</span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A2: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment"></span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A3: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment"></span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
            <AccordionDetails className="accordion-details">
              <span className="assignment">
                A4: psum dolor sit amet, consetetur sadipscing elitr, sed diam
                nonumy eirmod tempor
              </span>
              <div>
                <span className="status-assgiment"></span>
                <img
                  src={CoursePeriodIcon}
                  className="task-time-icon"
                  alt="logo"
                />
                <span className="status-assgiment">2 days ago</span>
              </div>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
};

export default CourseSyllabusTab;
