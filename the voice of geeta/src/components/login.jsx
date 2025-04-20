import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // Changed to email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, // ✅ Backend expects email
          password,
        }),
      });

      const data = await response.json();
      console.log("Login response:", data); // 🔍 Debug

      if (response.ok) {
        // ✅ Save user info and redirect
        localStorage.setItem("username", data.user.username);
        localStorage.setItem("userId", data.user.id);
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
            type="email"
            placeholder="Enter Your Email"
            className="input-field"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
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
