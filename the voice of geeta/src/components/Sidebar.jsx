// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/admin.css';
// import logo from '../assets/logo.png'; // update path as needed

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* <img src={logo} alt="Logo" /> */}
      </div>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/active-users">Active Users</Link></li>
        <li><Link to="/admin/daily-shlokas">Daily Shlokas</Link></li>
        <li><Link to="/admin/add-shloka">Add New Shloka</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
