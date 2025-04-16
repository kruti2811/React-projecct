import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save the username in localStorage
    localStorage.setItem("username", username);

    // Navigate to dashboard
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Register</h2>
        <p>Start Your Life with Divine Wisdom!</p>
        <img src="/images/krishnaicon.png" alt="Krishna Icon" className="logo" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Email"
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

      <div className="image-section">
        <img
          src="/images/register.jpg"
          alt="Bhagavad Gita"
          className="right-image"
        />
      </div>
    </div>
  );
};

export default Register;
