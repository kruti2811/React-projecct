// src/components/AdminLayout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import '../assets/css/admin.css';

const AdminLayout = ({ children }) => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content" style={{ marginLeft: '220px' }}>
        <Topbar />
        <div className="content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
