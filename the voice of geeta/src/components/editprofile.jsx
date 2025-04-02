import React from "react";
import "../assets/css/edit.css";
import { Link } from "react-router-dom";

function editprofile() {
  return (
    <div className="edit-container">
      <div className="edit-box">
        <div className="avatar">
          <img src="/images/edit.png" alt="Profile" />
        </div>
        <div className="input-container">
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
        </div>
        <button className="submit-button">Submit</button>
      </div>
    </div>
  );
}

export default editprofile;
