import React from "react";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Card,
  Chip,
} from "@mui/material";
import { Box } from "@mui/system";
import cardImg from "../../../Assets/images/cardImage.png";
import AssignmentIcon from "../../../Assets/images/AssignmentIcon.svg";
import CoursePeriodIcon from "../../../Assets/images/CoursePeriodIcon.svg";
import "./courseCard.scss";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ isParam }) => {
  const navigate = useNavigate();

  return (
    <div id="courseCard">
      <Box className="card-container">
        {/* <Chip label="Java" /> */}
        <Card sx={{ maxWidth: 240 }}>
          <CardActionArea onClick={() => navigate("/details")}>
            <CardMedia component="img" height="150" image={cardImg} alt="img" />
            <CardContent>
              <Typography variant="h6" className="course-name" component="div">
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
              <Typography variant="body2" className="assignment" component="p">
                2 days ago
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </div>
  );
};

export default CourseCard;

// {/* <Grid container spacing={3}>
//         <Grid item xs={12} sm={6} md={4}></Grid> */}
