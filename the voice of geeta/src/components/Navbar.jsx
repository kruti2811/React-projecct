import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/Rose.png" alt="Logo" />
        <span>Voice of Geeta</span>
      </div>

      {/* Hamburger Menu Checkbox */}
      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />
      <label htmlFor="menu-toggle" className="menu-icon">☰</label>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/adhyay">Adhyay</Link></li>
        <li><Link to="/vedas">Vedas</Link></li>
        <li><Link to="/teachings">Teachings</Link></li>
      </ul>
      
      <div className="profile-icon">
        <img src="/images/profile.png" alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
