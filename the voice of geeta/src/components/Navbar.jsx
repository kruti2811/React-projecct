import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for Navigation
import "../assets/css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/images/Rose.png" alt="Voice of Geeta" />
          <span>Voice of Geeta</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li> {/* ✅ Updated from Home to Dashboard */}
          <li><Link to="/adhyay">Adhyay</Link></li>
          <li><Link to="/vedas">Vedas</Link></li>
          <li><Link to="/teachings">Teachings</Link></li>
        </ul>
        <div className="profile-icon">
          <img src="/images/profile.png" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
