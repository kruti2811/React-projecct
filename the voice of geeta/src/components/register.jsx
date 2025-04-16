// src/pages/Register.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, email, password };

    try {
      console.log("Sending data to server:", user); // Debugging line

      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Registration Successful:", data);
        navigate("/login");
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
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
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
        <p className="forgot-password">Forgot Password?</p>
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
