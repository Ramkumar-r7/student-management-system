import React from "react";
import "./courseEnrollment.scss";
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
  Chip,
  Button,
  Stack,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import AssignmentIcon from "../../../Assets/images/AssignmentIcon.svg";
import courseImage from "../../../Assets/images/courseImg.png";
import CoursePeriodIcon from "../../../Assets/images/CoursePeriodIcon.svg";
import { useDispatch } from "react-redux";
import { IS_ENROLLED, IS_LEARNING } from "../../Redux/Action/actions";
import AssignmentContent from "../AssignmentContent/assignmentContent";
import { useNavigate } from "react-router-dom";

const CourseEnrollment = ({
  isAuthenicated,
  isEnrolled,
  isLearner,
  isSubmitted,
  isEvaluated,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isAuthenicated) {
      navigate("/register");
    }
    if (isAuthenicated) {
      dispatch({ type: IS_ENROLLED, payload: true });
    }
    if (isAuthenicated && isEnrolled) {
      dispatch({ type: IS_LEARNING, payload: true });
    }
  };

  return (
    <div id="courseEnrollment">
      <Box className="breadcrumb-box">
        <Breadcrumbs
          className="mb-2"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link underline="none" key="1" color="secondary" href="/courses">
            <Typography className="course-crumb">
              {isAuthenicated ? "Courses" : "All courses"}
            </Typography>
          </Link>
          <Link underline="none" key="2" color="secondary" href="/courses">
            <Typography className="course-crumb">Computer science</Typography>
          </Link>
          <Typography key="3" className="course-crumb-name">
            {isAuthenicated
              ? "Learn java programming : for absolute beginners"
              : "Python"}
          </Typography>
          {isEnrolled ? (
            <Typography key="4" className="topic-crumb-name">
              Topic 1
            </Typography>
          ) : null}
          {isEnrolled ? (
            <Typography key="5" className="topic-crumb-name">
              Assignment 1
            </Typography>
          ) : null}
        </Breadcrumbs>
      </Box>
      {isLearner ? (
        <AssignmentContent
          isSubmitted={isSubmitted}
          isEvaluated={isEvaluated}
        />
      ) : (
        <Box className="course-container">
          <div className="course-wrapper">
            <Chip size="small" label="Java" className="course-chip" />
            <Typography className="course-name">
              Learn java programming : for absolute beginners
            </Typography>
            {isAuthenicated ? null : (
              <Typography className="course-description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et
              </Typography>
            )}
            <Stack direction="row" spacing={4} mt={1}>
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
            </Stack>
            <br />
            <Stack
              spacing={2}
              direction="row"
              sx={{ marginTop: `${isAuthenicated ? "28px" : "0px"}` }}
            >
              <Button
                color="secondary"
                onClick={handleClick}
                variant="contained"
                className="btn-enroll"
                style={{
                  width: `${isAuthenicated && isEnrolled ? "170px" : "120px"}`,
                }}
              >
                {isEnrolled && isAuthenicated
                  ? "Start Learning Now"
                  : "Enroll Now"}
              </Button>
              {isEnrolled && isAuthenicated ? (
                <Box className="d-flex align-items-center">
                  <Box className="in-progress-box">
                    <Typography className="progress-text px-3">
                      In progress
                    </Typography>
                    <div className="vr my-1" style={{ height: "20px" }}></div>
                    <span className="progress-percent px-3">0% complete</span>
                  </Box>
                  <span className="last-activity px-3">
                    Last activity on 02/17/2023
                  </span>
                </Box>
              ) : null}
            </Stack>
          </div>
          <div>
            <img
              src={courseImage}
              className="course-img fluid"
              alt="course-pic"
            />
          </div>
        </Box>
      )}
    </div>
  );
};

export default CourseEnrollment;
