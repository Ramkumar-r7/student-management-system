import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./registerForm.scss";
import eyeLogoDefault from "../../Assets/images/eyeLogoDefault.svg";
const RegisterForm = () => {
  const navigate = useNavigate();

  return (
    <div id="registerForm">
      <Container maxWidth="sm">
        <Box className="register-box-model">
          <h3 className="form-header-text">Start learning</h3>
          <p className="register-header">Register Now</p>
          <div className="mb-3">
            <label>Full Name</label>
            <TextField type="text" placeholder="Enter full name" />
          </div>
          <div className="mb-3">
            <label>Email ID</label>
            <TextField type="text" placeholder="Enter email ID" />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div className="input-group">
              <TextField
                type={"" ? "text" : "password"}
                placeholder="Enter 6 digit password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={eyeLogoDefault} alt="logo" />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            disableElevation={true}
            onClick={() => localStorage.setItem("key", "sjdhshd")}
            className="login-btn"
          >
            Register
          </Button>
          <Typography className="condition-subtext">
            By continuing, you agree to our
            <a href="https://recruit.e2ehiring.com/terms-and-conditions">
              <span> Terms of Use </span>
            </a>
            and
            <a href="https://recruit.e2ehiring.com/terms-and-conditions">
              <span> Privacy policies </span>
            </a>
          </Typography>
        </Box>
      </Container>
      <p className="login-footer-text">
        Already have an account?
        <span onClick={() => navigate("/login")}> Login </span>
      </p>
    </div>
  );
};

export default RegisterForm;
