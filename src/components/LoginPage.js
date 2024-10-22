import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faApple,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import imageUrl from "../assets/img/aimscopefour-e70e3d5a-1.png"; // Update this path
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }
    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }
    setEmailError("");
    setPasswordError("");

    try {
      console.log(email);
      console.log(password);

      await axios
        .post(
          "http://92.118.56.227/api/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
         
          navigate("/home");
        });
    } catch (error) {
      toast.error(error.response.data.error, {
        style: {
          borderRadius: "8px",
          background: "#f8f9fa",
          color: "#212529",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "12px 20px",
        },
      });
      console.log("Login Error: ", error);
    }
  };

  const handleSendOtp = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
    setOtpSent(true);
    alert("OTP sent to your email.");
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      // For demo, use a static OTP
      alert("OTP verified successfully.");
      setForgotPassword(false);
    } else {
      alert("Invalid OTP.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
    alert("Password reset successful.");
    setForgotPassword(false);
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClose = () => {
    navigate("/");
  };

  const loginContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "700px",
    height: "60%",
    padding: "40px",
    background: "white",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    zIndex: 1000,
    flexWrap: "wrap",
    overflow: "hidden",
  };

  const formStyle = {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "transparent",
    border: "none",
    fontSize: "20px",
    cursor: "pointer",
  };

  const socialLoginContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  };

  const socialLoginBtnStyle = {
    flex: "1",
    borderRadius: "50px",
    margin: "0 5px",
    padding: "10px",
    background: "#f1f1f1",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
  };

  const socialLoginBtnStyleApple = {
    width: "100%",
    margin: "10px 0",
    padding: "10px",
    background: "#f1f1f1",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
  };

  const hrStyle = {
    width: "100%",
    border: "none",
    borderTop: "1px solid #ddd",
    margin: "20px 0",
    textAlign: "center",
    position: "relative",
  };

  const hrTextStyle = {
    background: "white",
    padding: "0 10px",
    position: "absolute",
    top: "-12px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "#888",
  };

  const inputContainerStyle = {
    width: "100%",
    position: "relative",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 40px",
    boxSizing: "border-box",
    borderRadius: "5px",
    border: "1px solid #ddd",
  };

  const inputIconStyle = {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#888",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "263px",
    height: "auto",
    position: "absolute",
    right: "10px",
    bottom: "10px",
    display: "block",
  };

  const loginBtnStyle = {
    background: "blue",
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "5px",
    color: "white",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
  };

  const resetContainerStyle = {
    marginTop: "20px",
  };

  return (
    <div style={loginContainerStyle}>
      <button style={closeBtnStyle} onClick={handleClose}>
        X
      </button>

      {!forgotPassword && (
        <div style={formStyle}>
          <h2>Login</h2>
          <div style={socialLoginContainerStyle}>
            <button
              style={socialLoginBtnStyle}
              onClick={() =>
                (window.location.href =
                  "https://accounts.google.com/o/oauth2/auth")
              }
            >
              <FontAwesomeIcon icon={faGoogle} /> Login with Google
            </button>
            <button
              style={socialLoginBtnStyle}
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/v11.0/dialog/oauth")
              }
            >
              <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
            </button>
          </div>

          <button
            style={socialLoginBtnStyleApple}
            onClick={() =>
              (window.location.href =
                "https://appleid.apple.com/auth/authorize")
            }
          >
            <FontAwesomeIcon icon={faApple} /> Sign in with Apple
          </button>

          <div style={hrStyle}>
            <span style={hrTextStyle}>or</span>
          </div>

          <form onSubmit={handleLogin}>
            <div style={inputContainerStyle}>
              <FontAwesomeIcon icon={faEnvelope} style={inputIconStyle} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>
            {emailError && (
              <div style={{ color: "red", textAlign: "left" }}>
                {emailError}
              </div>
            )}

            <div style={inputContainerStyle}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle}
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEye : faEyeSlash}
                style={{
                  ...inputIconStyle,
                  right: "10px",
                  left: "auto",
                  cursor: "pointer",
                }}
                onClick={togglePasswordVisibility}
              />
            </div>
            {passwordError && (
              <div style={{ color: "red", textAlign: "left" }}>
                {passwordError}
              </div>
            )}

            <button type="submit" style={loginBtnStyle}>
              Login
            </button>

            <div style={resetContainerStyle}>
              <a href="#" onClick={() => setForgotPassword(true)}>
                Forgot Password?
              </a>
            </div>

            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <p>
                Don't have an account? <a href="/signup">Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      )}

      {forgotPassword && (
        <div style={formStyle}>
          <h2>Reset Password</h2>
          {!otpSent ? (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
              <button style={loginBtnStyle} onClick={handleSendOtp}>
                Send OTP
              </button>
            </>
          ) : !otp ? (
            <>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                style={inputStyle}
              />
              <button style={loginBtnStyle} onClick={handleVerifyOtp}>
                Verify OTP
              </button>
            </>
          ) : (
            <>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                style={inputStyle}
              />
              <button style={loginBtnStyle} onClick={handleResetPassword}>
                Reset Password
              </button>
            </>
          )}
        </div>
      )}

      <div style={imageStyle}>
        <img
          src={imageUrl}
          alt="Login"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default LoginPage;
