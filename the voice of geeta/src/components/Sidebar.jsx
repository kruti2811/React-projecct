import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaPlus, FaBook, FaSignOutAlt } from 'react-icons/fa'; // You can import more icons as needed
import '../assets/css/admin.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header with Profile Icon */}
      <div className="sidebar-header">
        <div className="profile-icon">
          <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Profile" className="profile-img" />
        </div>
        <h3>Admin</h3>
      </div>

      {/* Sidebar Links */}
      <ul>
        <li>
          <Link to="/admin/dashboard">
            <FaHome className="sidebar-icon" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/user">
            <FaUserAlt className="sidebar-icon" />
            Active Users
          </Link>
        </li>
        <li>
          <Link to="/admin/AddShloka">
            <FaPlus className="sidebar-icon" />
            Add New Shloka
          </Link>
        </li>
        <li>
          <Link to="/admin/DailyShlokas">
            <FaBook className="sidebar-icon" />
            Daily Shloka
          </Link>
        </li>
        <li>
          <Link to="/admin/login">
            <FaSignOutAlt className="sidebar-icon" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
