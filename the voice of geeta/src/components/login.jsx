import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error
    setError("");

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Save username and redirect
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("userId", data.user.id); // You can use this later
        navigate("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err.message);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <p>Start Your Life with Divine Wisdom!</p>
        <img
          src="/images/krishnaicon.png"
          alt="Krishna Icon"
          className="logo"
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Username"
            className="input-field"
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-field"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <p className="forgot-password">Forgot Password ?</p>
      </div>

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
