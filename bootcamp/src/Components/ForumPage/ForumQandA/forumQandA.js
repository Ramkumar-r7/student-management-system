import {
  Box,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  DialogActions,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import "./forumQandA.scss";
import CoursePeriodIcon from "../../../Assets/images/CoursePeriodIcon.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/system";

const ForumQandA = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div id="forumQandA">
      <Box className="question-box">
        <span className="que-details">Asked by Rahul</span>
        <span className="que-details">
          <img src={CoursePeriodIcon} className="period-icon" alt="period" />8
          days
        </span>
        <Box className="question d-flex">
          <div className="color-box m-2"></div>
          <span className="question-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren
          </span>
        </Box>
        <Box className="d-flex justify-content-between">
          <div>
            <Chip className="question-chip m-1" label="Course:Course 1" />
            <Chip className="question-chip" label="Topic:Topic 1" />
          </div>
          <div>
            <span className="que-details">Not answered</span>
          </div>
        </Box>
      </Box>
      <Box
        className="question-box"
        sx={{ cursor: "pointer" }}
        onClick={() => setDialogOpen(true)}
      >
        <span className="que-details">Asked by Rahul</span>
        <span className="que-details">
          <img src={CoursePeriodIcon} className="period-icon" alt="period" />8
          days
        </span>
        <Box className="question d-flex">
          <div className="color-box m-2"></div>
          <span className="question-text">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren
          </span>
        </Box>
        <Box className="d-flex justify-content-between">
          <div>
            <Chip className="question-chip m-1" label="Course:Course 1" />
            <Chip className="question-chip" label="Topic:Topic 1" />
          </div>
          <div>
            <span className="que-details">
              <img
                src={CoursePeriodIcon}
                className="period-icon"
                alt="period"
              />
              8 days
            </span>
            <span className="que-details-answered">
              <CheckCircleIcon className="tick-icon" /> Answered
            </span>
          </div>
        </Box>
      </Box>
      <Dialog
        className="answered-dialog"
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <span className="dialog-title">View Question</span>
          <IconButton
            onClick={() => setDialogOpen(false)}
            sx={{
              color: "#000000",
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ border: "1px solid #707070", opacity: 0.2 }} />
        <DialogContent>
          <span className="student-detail">Asked by Rahul</span>
          <span className="student-detail">
            <img src={CoursePeriodIcon} className="period-icon" alt="period" />8
            days
          </span>
          <p className="student-question">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren
          </p>
          <Chip className="topic-chip" label="Topic:Topic 1" />
        </DialogContent>
        <Divider sx={{ border: "1px solid #707070", opacity: 0.2 }} />
        <DialogContent>
          <p className="answer-header">Answer</p>
          <p className="instructor-answer">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet
          </p>
          <Stack direction="row" spacing={2} className="mt-2">
            <p className="author-name">Dev Kanda</p>
            <Chip className="instructor-chip" label="Instructor" />
            <span className="student-detail">
              <img
                src={CoursePeriodIcon}
                className="period-icon"
                alt="period"
              />
              8 days
            </span>
          </Stack>
        </DialogContent>
        <Divider sx={{ border: "1px solid #707070", opacity: 0.2 }} />
        <DialogActions sx={{ m: 0, p: 2 }}>
          <Button variant="contained">Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ForumQandA;
