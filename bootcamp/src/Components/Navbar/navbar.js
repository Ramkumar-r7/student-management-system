import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Box,
  Divider,
  Button,
  Container,
} from "@mui/material";
import e2eLogo from "../../Assets/images/e2eLogo.svg";
import "./navbar.scss";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuthenicated }) => {
  const [tabIndicator, setTabIndicator] = useState(0);
  const navigate = useNavigate();
  console.log(isAuthenicated);

  const handleTabIndicatorChange = (event, newValue) => {
    setTabIndicator(newValue);
  };

  return (
    <div id="navbar">
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <img
            className="e2e-logo"
            src={e2eLogo}
            alt="logo"
            onClick={() => navigate("/courses")}
          />

          <>
            <Box className="tab-container">
              <Tabs
                value={tabIndicator}
                onChange={handleTabIndicatorChange}
                indicatorColor="primary"
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
                    onClick={() => navigate("/courses")}
                  />
                ) : null}
                {isAuthenicated ? (
                  <Tab
                    label="Forum"
                    value={2}
                    onClick={() => navigate("/faq")}
                  />
                ) : null}

                <Tab label="FAQs" value={3} onClick={() => navigate("/faq")} />
              </Tabs>
            </Box>
            {isAuthenicated ? null : (
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
