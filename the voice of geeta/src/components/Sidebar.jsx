import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/admin.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Add your logo here */}
      </div>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/user">Active Users</Link></li>
        <li><Link to="/admin/AddShloka">Add New Shloka</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
