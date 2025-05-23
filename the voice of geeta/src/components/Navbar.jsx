import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div 
  className="profile-wrapper"
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>
  <div className="profile-icon">
    <img src="/images/profile.png" alt="Profile" />
  </div>
  {dropdownOpen && (
    <div className="dropdown-menu">
      <ul>
        <li><Link to="/editprofile">Edit Profile</Link></li>
        <li><Link to="/login">Logout</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </div>
  )}
</div>
      </div>
    </nav>
  );
}

export default Navbar;
