import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // ✅ Protect Dashboard - Redirect to Login if Not Authenticated
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      alert('Unauthorized! Please log in.');
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Remove token
    navigate('/admin/login'); // Redirect to login
  };

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

      {/* 🔹 Logout Button */}
      <button onClick={handleLogout} style={{ marginTop: '20px', background: 'red', color: 'white' }}>
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
