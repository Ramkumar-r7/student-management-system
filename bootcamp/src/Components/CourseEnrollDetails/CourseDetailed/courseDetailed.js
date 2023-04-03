import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import "./courseDetailed.scss";
import AssignmentIcon from "../../../Assets/images/AssignmentIcon.svg";
import CoursePeriodIcon from "../../../Assets/images/CoursePeriodIcon.svg";
import courseImage from "../../../Assets/images/cardImage.png";

const CourseDetailed = ({ isAuthenicated }) => {
  return (
    <div id="courseDetailed">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link underline="none" key="1" color="primary" href="/courses">
          <Typography className="course-crumb">
            {isAuthenicated ? "Courses" : "All courses"}
          </Typography>
        </Link>
        <Link underline="none" key="2" color="primary" href="/courses">
          <Typography className="course-crumb">Computer science</Typography>
        </Link>
        <Typography key="3" className="course-crumb-name">
          {isAuthenicated
            ? "Learn java programming : for absolute beginners"
            : "Python"}
        </Typography>
      </Breadcrumbs>

      <Box className="course-container">
        <div className="course-wrapper">
          <Chip size="small" label="Java" className="course-chip" />
          <Typography className="course-name">
            Learn java programming : for absolute beginners
          </Typography>
          {isAuthenicated ? null : (
            <Typography className="course-description">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et
            </Typography>
          )}
          <Typography className="course-instructor" variant="p">
            By Dev Kanda
          </Typography>
          <Typography className="course-extras" variant="p">
            <img src={AssignmentIcon} alt="logo" />
            12 Assignments
          </Typography>
          <Typography className="course-extras" variant="p">
            <img src={CoursePeriodIcon} alt="logo" />
            12 days
          </Typography>
          <Typography className="course-extras" variant="p">
            Added 2 days ago
          </Typography>
          <br />
          <Button
            variant="contained"
            className="btn-enroll"
            style={{ marginTop: `${isAuthenicated ? "63px" : "27px"}` }}
          >
            Enroll Now
          </Button>
        </div>
        <div>
          <img src={courseImage} className="course-img fluid" alt="course-pic" />
        </div>
      </Box>
    </div>
  );
};

export default CourseDetailed;
