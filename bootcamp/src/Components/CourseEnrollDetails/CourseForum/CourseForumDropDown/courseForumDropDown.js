import React, { useState } from "react";
import "./courseForumDropDown.scss";
import { Box, FormControl, InputLabel, Select, MenuItem, Button } from "@mui/material";
import { ReactComponent as ExpandLogo } from "../../../../Assets/images/ExpandLogo.svg";

const CourseForumDropDown = () => {
  const [courseCategory, setCourseCategory] = useState(1);
  return (
    <div id="courseForumDropDown">
      <Box className="dropdown-box mt-4 d-flex justify-content-between">
        <Box>
          <FormControl className="course-dropdown">
            <InputLabel className="course-label">Topic</InputLabel>
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
              <MenuItem value={1}>Lorem ipsum dolor sit amet </MenuItem>
              <MenuItem value={2}>1 </MenuItem>
              <MenuItem value={3}>2 </MenuItem>
            </Select>
          </FormControl>
          <FormControl className="recent-dropdown">
            <InputLabel className="course-label">Sort By</InputLabel>
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
              <MenuItem value={1}> Most Recent</MenuItem>
              <MenuItem value={2}>Most Popular</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button variant="contained" className="btn-ask">Ask</Button>
      </Box>
     
    </div>
  );
};

export default CourseForumDropDown;
