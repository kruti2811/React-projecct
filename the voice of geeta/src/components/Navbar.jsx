import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar() {
  // State to control the visibility of the dropdown menu
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Toggle the dropdown menu visibility
  const handleProfileClick = () => {
    setIsDropdownVisible((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/Rose.png" alt="Voice of Geeta" />
          <span>Voice of Geeta</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adhyay">Adhyay</Link></li>
          <li><Link to="/vedas">Vedas</Link></li>
          <li><Link to="/teachings">Teachings</Link></li>
        </ul>
        <div className="profile-icon" onClick={handleProfileClick}>
          <img src="/images/profile.png" alt="Profile" />
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
