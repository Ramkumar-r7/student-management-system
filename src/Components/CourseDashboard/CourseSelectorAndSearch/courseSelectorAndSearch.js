import {
  FormControl,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import "./courseSelectorAndSearch.scss";
import { useState } from "react";
import { ReactComponent as ExpandLogo } from "../../../Assets/images/ExpandLogo.svg";
import SearchLogo from "../../../Assets/images/SearchLogo.svg";

const CourseSelectorAndSearch = () => {
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
    <div id="CourseSelectorAndSearch">
      <FormControl className="course-selector-wrap">
        <Select
          value={selectedOption}
          onChange={({ target: { value } }) => setSelectedOption(value)}
          IconComponent={ExpandLogo}
          MenuProps={{
            sx: {
              ".MuiPopover-paper": {
                marginTop: "0.625rem",
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
              <img src={SearchLogo} alt="logo" />
            </InputAdornment>
          ),
        }}
      />

      <FormControl className="sortby-dropdown d-inline">
        <InputLabel
          className="sortby-select-label mt-2 mx-4  pt-1"
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
                marginTop: "0.625rem",
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
    </div>
  );
};

export default CourseSelectorAndSearch;
