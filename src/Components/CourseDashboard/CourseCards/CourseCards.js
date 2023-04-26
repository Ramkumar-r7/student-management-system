import React from "react";
import "./courseCards.scss";
import {
  Box,
  Card,
  CardMedia,
  CardActionArea,
  Chip,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import courseImg from "../../../Assets/images/courseImg.png";
import AssignmentIcon from "../../../Assets/images/AssignmentIcon.svg";
import CoursePeriodIcon from "../../../Assets/images/CoursePeriodIcon.svg";
import { useNavigate } from "react-router-dom";

const CourseCards = () => {
  const navigate = useNavigate();

  return (
    <div id="CourseCards">
      <Box className="card-container d-flex">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box>
              <Chip label="Java" className="course-tag" />
              <Card sx={{ maxWidth: 240 }} className="card">
                <CardActionArea onClick={() => navigate("/details")}>
                  <CardMedia
                    component="img"
                    height="150"
                    image={courseImg}
                    alt="course-img"
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      className="course-name"
                      component="div"
                    >
                      Learn java programming :<br />
                      for absolute beginners
                    </Typography>
                    <Typography
                      variant="body2"
                      className="instructor-name"
                      component="p"
                    >
                      by Dev Kanda
                    </Typography>
                    <Box className="d-flex justify-content-between">
                      <Typography
                        variant="body2"
                        className="assignment"
                        component="p"
                      >
                        <img src={AssignmentIcon} alt="assignment-logo" />
                        12 Assignments
                      </Typography>
                      <Typography
                        variant="body2"
                        className="time-period"
                        component="p"
                      >
                        <img src={CoursePeriodIcon} alt="time-period-logo" />
                        10 days
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      className="assignment"
                      component="p"
                    >
                      2 days ago
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CourseCards;
