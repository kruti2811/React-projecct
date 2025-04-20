import React, { useState, useEffect } from "react";
import "../assets/css/edit.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditProfile() {
  const navigate = useNavigate();
  
  // State to manage form data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    // Fetch the current profile data on component mount (assuming you're using localStorage for initial values)
    setUsername(localStorage.getItem("username"));
    setPassword(localStorage.getItem("password"));
    setEmail(localStorage.getItem("email"));
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the updated data to the backend
      const response = await axios.put("http://localhost:3000/api/edit-profile", {
        username,
        password,  // Sending password as plain text
        email
      });

      console.log("Profile updated:", response.data);
      // Redirect after successful update
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="edit-container">
      <form className="edit-box" onSubmit={handleSubmit}>
        <div className="avatar">
          <img src="/images/edit.png" alt="Profile" />
        </div>
        <div className="input-container">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
