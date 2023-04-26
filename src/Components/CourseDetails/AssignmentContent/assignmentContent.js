import React, { useState } from "react";
import "./assignmentContent.scss";
import {
  Box,
  Typography,
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  Divider,
  Chip,
} from "@mui/material";
import LeftArrow from "../../../Assets/images/LeftArrow.svg";
import RightArrow from "../../../Assets/images/RightArrow.svg";
import FileUpload from "../../../Assets/images/FileUpload.svg";
import RedCloseLogo from "../../../Assets/images/RedCloseLogo.svg";
import StarLogo from "../../../Assets/images/StarLogo.svg";
import GradeBatch from "../../../Assets/images/GradeBatch.svg";
import ColoredGradeBatch from "../../../Assets/images/ColoredGradeBatch.svg";
import ColoredStar from "../../../Assets/images/ColoredStar.svg";
import { FileUploader } from "react-drag-drop-files";
import { useDispatch } from "react-redux";
import { IS_SUBMITTED } from "../../Redux/Action/actions";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useNavigate } from "react-router-dom";

const AssignmentContent = ({ isSubmitted }) => {
  const [assignmentCount, setAssignmentCount] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [fileSize, setFileSize] = useState();
  const [fileType, setFileType] = useState();
  const [isEvaluated, setIsEvaluated] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleSubmitAssignment = () => {
    dispatch({ type: IS_SUBMITTED, payload: true });
    setDialogOpen(false);
  };

  const handleChange = (file) => {
    setFile(file);

    if (file[0]?.type) {
      const type = file[0]?.type.split("/");
      setFileType(type[1]);
    }
    if (file[0]?.size) {
      var i = Math.floor(Math.log(file[0]?.size) / Math.log(1024)),
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const size =
        (file[0]?.size / Math.pow(1024, i)).toFixed(2) * 1 + " " + sizes[i];
      setFileSize(size);
    }
  };
  const fileTypes = ["pdf"];

  return (
    <div id="assignmentContent">
      <Box className="assignment-box mb-3">
        <Box className="assignment-count-slider">
          <Stack direction="row" spacing={2}>
            <Typography className="topic-heading">
              Topic 1 of 5, Assignment {assignmentCount} of 4
            </Typography>
            <div className="chip-wrap">
              <Chip
                label={isSubmitted ? "Completed" : "Inprogress"}
                avatar={
                  <FiberManualRecordIcon
                    className={isSubmitted ? "submitted-chip" : "dot-chip"}
                  />
                }
                className={
                  isSubmitted ? "course-completed-chip" : "course-progress-chip"
                }
              />
            </div>
          </Stack>
          <div className="arrow-btn">
            <img
              src={LeftArrow}
              alt="left-arrow"
              className="left-arrow px-2"
              onClick={() => setAssignmentCount(assignmentCount - 1)}
            />

            <img
              src={RightArrow}
              alt="right-arrow"
              className="right-arrow"
              onClick={() => setAssignmentCount(assignmentCount + 1)}
            />
          </div>
        </Box>
      </Box>
      <Box className="assignment-content-box">
        <Stack direction="column" className="mb-2">
          <Typography className="topic-name">Lorem ipsum</Typography>
          <Box className="assignment-topic">
            <Typography className="assignment-name">
              lipsum dolor sit amet, consetetur sadipscing
            </Typography>

            {isSubmitted ? (
              <Box className="submitted-indicator">
                <div className="submitted-btn mb-2">
                  <span>Assignment Submitted</span>
                </div>
                <Typography className="submitted-date">
                  Submitted on 03/02/2023
                </Typography>
              </Box>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setDialogOpen(true)}
              >
                Submit Assignment
              </Button>
            )}
          </Box>
        </Stack>
        {isSubmitted ? (
          <Box
            className="grade-box p-2 mb-3 "
            onClick={() => {
              setIsEvaluated(true);
              navigate("/details");
            }}
          >
            <Stack direction="row" spacing={2}>
              <img
                src={isEvaluated ? ColoredGradeBatch : GradeBatch}
                alt="grade-batch"
              />
              <Typography className="grade-evaluating">
                {isEvaluated
                  ? "Congratulations!!! You have secured"
                  : "Grade will be given after evaluation"}
              </Typography>
              {isEvaluated ? null : <img src={StarLogo} alt="star" />}
              {isEvaluated ? (
                <Box className="passed-grade-box d-flex align-items-center px-3">
                  <Stack direction="row" spacing={1}>
                    <img src={ColoredStar} alt="star" />
                    <Typography className="passed-grade text-capitalize">
                      A+ grade
                    </Typography>
                  </Stack>
                </Box>
              ) : null}
            </Stack>
          </Box>
        ) : null}
        <Box className="content-box">
          <Typography className="topic-sub-heading mt-2 mb-2">
            lipsum dolor sit amet, consetetur sadipscing
          </Typography>
          <Typography className="content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita
          </Typography>
          <Typography className="topic-sub-heading mt-4 mb-2">
            lipsum dolor sit amet, consetetur sadipscing
          </Typography>
          <Typography className="content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita
          </Typography>
          <Typography className="topic-sub-heading mt-4 mb-2">
            lipsum dolor sit amet, consetetur sadipscing
          </Typography>
          <Typography className="content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            <br />
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita
          </Typography>
          <Typography className="content">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita
          </Typography>
          <Typography className="content">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita
          </Typography>
        </Box>
        <Dialog
          className="file-upload-dialog"
          onClose={() => setDialogOpen(false)}
          open={dialogOpen}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle sx={{ m: 0, p: 2 }}>
            <Typography className="dialog-title">Submit Assignment</Typography>
          </DialogTitle>
          <DialogContent>
            <Box className="file-box mb-3">
              <Box>
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                >
                  <span className="img-file">
                    <img src={FileUpload} alt="file" className="mb-3" />
                  </span>
                  <Typography className="file-uploader">
                    Drop your assignment here or
                    <span style={{ color: "#1D366F" }}> Browse </span>
                  </Typography>
                  <Typography className="file-type">
                    Supported : Doc, Pdf ( 5Mb max)
                  </Typography>
                </FileUploader>
              </Box>
            </Box>
            {file ? (
              <Box className="uploaded-file my-4 d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <img src={FileUpload} alt="file" className="file-img mx-2" />
                  <Stack direction="column">
                    <Typography className="file-name">
                      {file[0]?.name}
                    </Typography>
                    <Typography className="file-size text-uppercase">
                      {fileType} {fileSize}
                    </Typography>
                  </Stack>
                </div>
                <img
                  src={RedCloseLogo}
                  alt="file"
                  className="close-img"
                  onClick={() => setFile()}
                />
              </Box>
            ) : (
              <p className="no-file my-4">No files uploaded</p>
            )}
          </DialogContent>
          <Divider sx={{ border: "1px solid #707070", opacity: 0.2 }} />
          <DialogActions sx={{ m: 0, p: 2 }}>
            <Box className="btn-box">
              <Button
                variant="outlined"
                className="cancel-btn"
                onClick={() => setDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="submit-btn"
                disabled={file ? false : true}
                onClick={() => handleSubmitAssignment()}
              >
                Submit
              </Button>
            </Box>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default AssignmentContent;
