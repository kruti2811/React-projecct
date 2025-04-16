import React from "react";
import "../assets/css/profile.css";

function Profile() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome, {username}!</h2>
        <div className="profile-details">
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
