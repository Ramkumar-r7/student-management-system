import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Box,
  Divider,
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
  ListItemIcon,
} from "@mui/material";
import e2eLogo from "../../Assets/images/e2eLogo.svg";
import logoutLogo from "../../Assets/images/logoutLogo.svg";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import { colorPicker } from "../../Components/userProfileColorPicker";

const Navbar = ({ isAuthenicated, isParam }) => {
  const [tabIndicator, setTabIndicator] = useState(0);
  const [anchorEl, setAnchorEl] = useState(false);
  const navigate = useNavigate();
  const handleTabIndicatorChange = (event, newValue) => {
    setTabIndicator(newValue);
  };

  const fname = localStorage.getItem("fullname");
  const email = localStorage.getItem("email");

  return (
    <div id="navbar">
      {isParam === "/" ? null : (
        <AppBar position="fixed">
          <Toolbar variant="dense">
            <img className="e2e-logo" src={e2eLogo} alt="logo" />
            {isParam === "/login" || isParam === "/register" ? null : (
              <>
                <Box className="tab-container">
                  <Tabs
                    value={tabIndicator}
                    onChange={handleTabIndicatorChange}
                    indicatorColor="primary"
                    TabIndicatorProps={{
                      sx: isParam === "/details" ? { display: "none" } : null,
                    }}
                  >
                    <Tab
                      label="Courses"
                      value={0}
                      onClick={() => navigate("/courses")}
                    />
                    {isAuthenicated ? (
                      <Tab
                        label="Dashboard"
                        value={1}
                        onClick={() => navigate("/dashboard")}
                      />
                    ) : null}
                    {isAuthenicated ? (
                      <Tab
                        label="Forum"
                        value={2}
                        onClick={() => navigate("/forum")}
                      />
                    ) : null}
                    <Tab
                      label="FAQs"
                      value={3}
                      onClick={() => navigate("/faq")}
                    />
                  </Tabs>
                </Box>
                {isAuthenicated ? (
                  <Container>
                    <div
                      className="profileImage"
                      style={{ backgroundColor: `${colorPicker().bg}` }}
                      onClick={(e) => setAnchorEl(e.currentTarget)}
                    >
                      <span>{colorPicker().initial}</span>
                    </div>
                    <Menu
                      className="profile-menu"
                      sx={{
                        ".MuiPopover-paper": {
                          marginTop: "10px",
                          boxShadow: "0px 3px 6px #00000029",
                          border: "1px solid #D8D8D8",
                          borderRadius: "5px",
                        },
                        " .MuiList-root": {
                          width: "250px",
                          height: "100px",
                        },
                        ".profile-dropdown": {
                          fontFamily: "Open Sans",
                          fontSize: "13px",
                          color: "#FFFFFF",
                          borderRadius: "50%",
                          fontWeight: 600,
                          width: "33px",
                          height: "31px",
                          lineHeight: "30px",
                          textAlign: "center",
                        },
                        ".logout": {
                          fontFamily: "Open Sans",
                          fontSize: "13px",
                          color: "#262626",
                          fontWeight: 600,
                        },
                      }}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      onClose={() => setAnchorEl(!anchorEl)}
                    >
                      <MenuItem divider={true}>
                        <Box className="menu-box">
                          <div
                            className="profile-dropdown"
                            style={{ backgroundColor: `${colorPicker().bg}` }}
                          >
                            <span>{colorPicker().initial}</span>
                          </div>
                          <Box className="profile-details">
                            <span className="username">{fname}</span>
                            <span className="email">{email}</span>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <img src={logoutLogo} alt="sh" />
                        </ListItemIcon>
                        <Typography className="logout">Logout</Typography>
                      </MenuItem>
                    </Menu>
                  </Container>
                ) : (
                  <Container className="navbar-subcontianer">
                    <span className="navbar-subtext">Teach on e2eHiring</span>
                    <Divider
                      className="divider-line"
                      orientation="vertical"
                      flexItem
                    />
                    <Button
                      className="navbar-btn"
                      variant="outlined"
                      color="primary"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="navbar-btn"
                      variant="contained"
                      color="primary"
                      onClick={() => navigate("/register")}
                    >
                      Register Now
                    </Button>
                  </Container>
                )}
              </>
            )}
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};

export default Navbar;
