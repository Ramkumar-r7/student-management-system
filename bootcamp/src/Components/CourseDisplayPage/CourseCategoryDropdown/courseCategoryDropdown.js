import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  Grid,
  InputLabel,
} from "@mui/material";
import "./courseCategoryDropdown.scss";
import { ReactComponent as ExpandLogo } from "../../../Assets/images/ExpandLogo.svg";
import searchLogo from "../../../Assets/images/searchLogo.svg";

const CourseCategoryDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [sortByOption, setSortByOption] = useState("a");

  const categoryOptions = [
    "Data Science",
    "Business",
    "Computer Science",
    "Information Technology",
    "Health",
    "Personal Development",
    "Social Science",
    "Arts",
  ];

  return (
    <div id="CourseCategoryDropdown">
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <FormControl className="dropdown-wrap">
          <Select
            value={selectedOption}
            onChange={({ target: { value } }) => setSelectedOption(value)}
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
            <MenuItem className="menu-header" disabled>
              Categories
            </MenuItem>
            <MenuItem value={0}>All courses</MenuItem>
            {categoryOptions.map((options) => (
              <MenuItem key={options} value={options}>
                {options}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          placeholder="Search our courses"
          className="search-bar"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <img src={searchLogo} alt="logo" />
              </InputAdornment>
            ),
          }}
        />

        <FormControl className="sortby-dropdown d-inline">
          <InputLabel
            className="sortby-select-label"
            shrink={true}
            size="small"
            id="my-select-label"
          >
            Sort By
          </InputLabel>
          <Select
            value={sortByOption}
            onChange={({ target: { value } }) => setSortByOption(value)}
            className="dropdown-wrap"
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
                  paddingRight: "35px",
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
            <MenuItem value={"a"}>Most Recent</MenuItem>
            <MenuItem value={"b"}>Most Popular</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </div>
  );
};

export default CourseCategoryDropdown;
