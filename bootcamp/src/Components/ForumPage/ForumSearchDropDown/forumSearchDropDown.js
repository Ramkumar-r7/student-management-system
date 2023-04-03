import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Divider,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import "./forumSearchDropDown.scss";
import searchLogo from "../../../Assets/images/searchLogo.svg";
import { ReactComponent as ExpandLogo } from "../../../Assets/images/ExpandLogo.svg";
import CloseIcon from "@mui/icons-material/Close";

const ForumSearchDropDown = () => {
  const [courseCategory, setCourseCategory] = useState(1);
  const [topicCategory, setTopicCategory] = useState(1);
  const [selectCourse, SetSelectCourse] = useState(1);
  const [selectTopic, setSelectTopic] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div id="forumSearchDropDown">
      <Box className="search-box d-flex justify-content-between mt-4 ">
        <Box>
          <TextField
            className="search-field"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={searchLogo} alt="logo" />
                </InputAdornment>
              ),
            }}
          />
          <FormControl className="course-dropdown">
            <InputLabel className="course-label">Courses</InputLabel>
            <Select
              value={courseCategory}
              onChange={({ target: { value } }) => setCourseCategory(value)}
              IconComponent={ExpandLogo}
              MenuProps={{
                sx: {
                  ".MuiPopover-paper": {
                    marginTop: "10px",
                    boxShadow: "0px 3px 6px #00000029 !important",
                    border: "1px solid #EEEEEE",
                    borderRadius: "10px",
                  },
                  ".menu-header.MuiMenuItem-root": {
                    color: "#999999",
                    fontFamily: "Open Sans ",
                    fontWeight: "600",
                    fontSize: "12px",
                  },
                  ".MuiMenuItem-root": {
                    paddingRight: "70px",
                    color: "#262626",
                    fontFamily: "Open Sans ",
                    fontWeight: 500,
                    fontSize: "13px",
                    border: "1px solid #EEEEEE",
                  },
                  ".MuiList-root": {
                    padding: "0px",
                  },
                },
              }}
            >
              <MenuItem className="menu-header" value={0} disabled>
                Category
              </MenuItem>
              <MenuItem value={1}>All Courses </MenuItem>
              <MenuItem value={2}>1 </MenuItem>
              <MenuItem value={3}>2 </MenuItem>
            </Select>
          </FormControl>
          <FormControl className="course-dropdown">
            <InputLabel className="course-label">Topics</InputLabel>
            <Select
              value={topicCategory}
              onChange={({ target: { value } }) => setTopicCategory(value)}
              IconComponent={ExpandLogo}
              MenuProps={{
                sx: {
                  ".MuiPopover-paper": {
                    marginTop: "10px",
                    boxShadow: "0px 3px 6px #00000029 !important",
                    border: "1px solid #EEEEEE",
                    borderRadius: "10px",
                  },
                  ".menu-header.MuiMenuItem-root": {
                    color: "#999999",
                    fontFamily: "Open Sans ",
                    fontWeight: "600",
                    fontSize: "12px",
                  },
                  ".MuiMenuItem-root": {
                    paddingRight: "70px",
                    color: "#262626",
                    fontFamily: "Open Sans ",
                    fontWeight: 500,
                    fontSize: "13px",
                    border: "1px solid #EEEEEE",
                  },
                  ".MuiList-root": {
                    padding: "0px",
                  },
                },
              }}
            >
              <MenuItem className="menu-header" value={0} disabled>
                Category
              </MenuItem>
              <MenuItem value={1}>All Topics </MenuItem>
              <MenuItem value={2}>1 </MenuItem>
              <MenuItem value={3}>2 </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          className="btn-ask"
          onClick={() => setDialogOpen(true)}
        >
          Ask
        </Button>
      </Box>
      <Dialog
        className="dialog"
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }}>
          <span className="dialog-title"> Ask a question</span>
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
          <Box className="dialog-wrapper">
            <p className="question-header ">Your Question</p>
            <TextField
           
              multiline
              rows={5}
              maxRows={10}
              placeholder="Title of your question..."
            />
          </Box>
          <Box className="d-flex justify-content-between">
            <FormControl >
              <p className="dropdown-helper">Select Course</p>
              <Select
                value={selectCourse}
                onChange={({ target: { value } }) => SetSelectCourse(value)}
                IconComponent={ExpandLogo}
                MenuProps={{
                  sx: {
                    ".MuiPopover-paper": {
                      marginTop: "10px",
                      boxShadow: "0px 3px 6px #00000029 !important",
                      border: "1px solid #EEEEEE",
                      borderRadius: "10px",
                    },
                    ".MuiMenuItem-root": {
                      paddingRight: "70px",
                      color: "#262626",
                      fontFamily: "Open Sans ",
                      fontWeight: 500,
                      fontSize: "13px",
                      border: "1px solid #EEEEEE",
                    },
                    ".MuiList-root": {
                      padding: "0px",
                    },
                  },
                }}
              >
                <MenuItem value={1}>Select Course</MenuItem>
                <MenuItem value={2}>1</MenuItem>
                <MenuItem value={3}>2</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <p className="dropdown-helper">Select Topics</p>
              <Select
                value={selectTopic}
                onChange={({ target: { value } }) => setSelectTopic(value)}
                IconComponent={ExpandLogo}
                MenuProps={{
                  sx: {
                    ".MuiPopover-paper": {
                      marginTop: "10px",
                      boxShadow: "0px 3px 6px #00000029 !important",
                      border: "1px solid #EEEEEE",
                      borderRadius: "10px",
                    },
                    ".MuiMenuItem-root": {
                      paddingRight: "70px",
                      color: "#262626",
                      fontFamily: "Open Sans ",
                      fontWeight: 500,
                      fontSize: "13px",
                      border: "1px solid #EEEEEE",
                    },
                    ".MuiList-root": {
                      padding: "0px",
                    },
                  },
                }}
              >
                <MenuItem value={1}>Select Topics</MenuItem>
                <MenuItem value={2}>1</MenuItem>
                <MenuItem value={3}>2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <Divider sx={{ border: "1px solid #707070", opacity: 0.2 }} />
        <DialogActions sx={{ m: 0, p: 2 }}>
          <Button variant="contained">Submit Question</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ForumSearchDropDown;
