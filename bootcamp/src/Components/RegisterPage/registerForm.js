import {
  Container,
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerForm.scss";
import eyeLogoDefault from "../../Assets/images/eyeLogoDefault.svg";
import eyeLogoToogle from "../../Assets/images/eyeLogoToggle.svg";
import { useDispatch } from "react-redux";
import { AUTH_USER } from "../../Redux/Action/actions";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordShow, setPasswordShow] = useState(true);
  const dispatch = useDispatch();

  

  const handleStoreUserData = () => {
    localStorage.setItem("fullname", username);
    localStorage.setItem("email", userEmail);
    localStorage.setItem("password", userPassword);
    dispatch({ type: AUTH_USER, payload: true });
    navigate("/courses");
  };

  return (
    <div id="registerForm">
      <Container maxWidth="sm">
        <Box className="register-box-model">
          <h3 className="form-header-text">Start learning</h3>
          <p className="register-header">Register Now</p>
          <div className="mb-2">
            <label>Full Name</label>
            <TextField
              type="text"
              placeholder="Enter full name"
              onChange={({ target: { value } }) => setUsername(value)}
              value={username}
            />
            <Typography className="error-msg"></Typography>
          </div>
          <div className="mb-2">
            <label>Email ID</label>
            <TextField
              type="text"
              placeholder="Enter email ID"
              onChange={({ target: { value } }) => setUserEmail(value)}
              value={userEmail}
            />
            <Typography className="error-msg"></Typography>
          </div>
          <div className="mb-2">
            <label>Password</label>
            <div className="input-group">
              <TextField
                onChange={({ target: { value } }) => setUserPassword(value)}
                value={userPassword}
                type={passwordShow ? "password" : "text"}
                placeholder="Enter 6 digit password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img
                        src={passwordShow ? eyeLogoDefault : eyeLogoToogle}
                        alt="logo"
                        onClick={() => setPasswordShow(!passwordShow)}
                      />
                    </InputAdornment>
                  ),
                }}
              />
              <Typography className="error-msg"></Typography>
            </div>
          </div>
          <Button
            disabled={
              username === "" || userEmail === "" || userPassword === ""
            }
            variant="contained"
            color="primary"
            disableElevation={true}
            onClick={handleStoreUserData}
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
