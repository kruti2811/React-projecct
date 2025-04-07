// src/pages/admin/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="content">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-stats">
        <div className="stat-card">
          Total Adhyayas
          <span>18</span>
        </div>
        <div className="stat-card">
          Total Shlokas
          <span>700</span>
        </div>
        <div className="stat-card">
          Active Users
          <span>150</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
