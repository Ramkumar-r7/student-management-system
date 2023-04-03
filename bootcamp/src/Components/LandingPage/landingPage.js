import React from "react";
import { Button, Stack, Paper, Typography } from "@mui/material";
import CmritLogo from "../../Assets/images/CmritLogo.png";
import e2eLogo from "../../Assets/images/e2eLogo.svg";
import "./landingPage.scss";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div id="landingPage">
      <div className="logos-container">
        <img className="cmrit-logo" src={CmritLogo} alt="logo" />
        <img className="e2e-logo" src={e2eLogo} alt="logo" />
      </div>
      <div className="heading-container">
        <Paper className="heading-box-wrapper">
          <Typography className="heading-text-one">
            for bootcamp usecase
          </Typography>
          <Typography className="heading-text-two">
            Wireframes on Course web app
          </Typography>
        </Paper>
      </div>
      <Stack spacing={3} className="button-container">
        <Button
          className="btn-stack"
          disableElevation={true}
          variant="contained"
          onClick={() => navigate("/courses")}
        >
          Guest/Not registered User
        </Button>
        <Button className="btn-stack" variant="outlined"  onClick={() => navigate("/login")}>
          Student module
        </Button>
        <Button className="btn-stack" variant="outlined">
          Instructor module
        </Button>
      </Stack>
    </div>
  );
};

export default LandingPage;
