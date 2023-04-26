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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colorPicker } from "../userProfileColorPicker";

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
                    indicatorColor="secondary"
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
                          marginTop: "0.625rem",
                          boxShadow: "0px 3px 6px #00000029",
                          border: "1px solid #D8D8D8",
                          borderRadius: "5px",
                        },
                        " .MuiList-root": {
                          width: "15.625rem",
                          height: "6.25rem",
                        },
                        ".profile-dropdown": {
                          fontFamily: "Open Sans",
                          fontSize: "0.875rem",
                          color: "#FFFFFF",
                          borderRadius: "50%",
                          fontWeight: 600,
                          width: "2.0625rem",
                          height: "1.9375rem",
                          lineHeight: "1.875rem",
                          textAlign: "center",
                        },
                        ".logout": {
                          fontFamily: "Open Sans",
                          fontSize: "0.875rem",
                          color: "#262626",
                          fontWeight: 700,
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
                            <span className="username text-capitalize">
                              {fname}
                            </span>
                            <span className="email">{email}</span>
                          </Box>
                        </Box>
                      </MenuItem>
                      <MenuItem>
                        <ListItemIcon>
                          <img src={logoutLogo} alt="logout" />
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
                      className="navbar-btn mx-3"
                      variant="outlined"
                      color="secondary"
                      onClick={() => navigate("/login")}
                    >
                      Login
                    </Button>
                    <Button
                      className="navbar-btn"
                      variant="contained"
                      color="secondary"
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
