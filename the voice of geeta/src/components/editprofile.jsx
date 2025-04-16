import React from "react";
import "../assets/css/edit.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    // Update localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Navigate back to profile (or wherever you want)
    navigate("/profile");
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
            defaultValue={localStorage.getItem("username")}
            className="input-field"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={localStorage.getItem("password")}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
