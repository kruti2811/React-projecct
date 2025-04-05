import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom"; // ✅ Outlet for Admin Pages

const AdminLayout = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <div className="content" style={{ marginLeft: '220px' }}>
        <div className="content-inner">
          <Outlet />  {/* 🔥 Dynamically Load Admin Pages */}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
