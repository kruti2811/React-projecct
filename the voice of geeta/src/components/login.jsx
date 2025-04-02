import React from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here if needed, then navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      {/* Left Side (Login Form) */}
      <div className="login-form">
        <h2>Login</h2>
        <p>Start Your Life with Divine Wisdom!</p>
        <img src="/images/krishnaicon.png" alt="Krishna Icon" className="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <p className="forgot-password">Forgot Password ?</p>
      </div>

      {/* Right Side (Image Section) */}
      <div className="image-section">
        <img
          src="/images/bhgvad_geeta1.png"
          alt="Bhagavad Gita"
          className="right-image"
        />
      </div>
    </div>
  );
};

export default Login;
