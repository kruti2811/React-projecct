// src/components/Topbar.jsx
import React from 'react';
// import profile from '../assets/account.png'; // update path if needed

const Topbar = () => {
  return (
    <div className="topbar">
      <h2 className="page-heading">Admin Dashboard</h2>
      <div className="profile-icon">
        <a href="/admin/profile">
          {/* <img src={profile} alt="Profile" /> */}
        </a>
      </div>
    </div>
  );
};

export default Topbar;
