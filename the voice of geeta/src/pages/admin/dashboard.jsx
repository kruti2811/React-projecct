import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Protect Dashboard - Redirect to Login if Not Authenticated
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

  // Theme colors
  const theme = {
    primary: '#ff914d', // spiritual orange
    secondary: '#293241', // deep blue/gray
    background: '#fffaf5', // light creamy background
    textColor: '#293241', // text color
    cardBackground: '#ffffff', // white for cards
    buttonColor: '#ff914d',
    buttonTextColor: 'white',
    hoverEffect: 'rgba(0, 0, 0, 0.1)',
  };

  // Card styles for stats
  const statCardStyle = {
    backgroundColor: theme.cardBackground,
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    flex: '1',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  // Hover effect for cards
  const hoverEffectStyle = {
    ...statCardStyle,
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={{ padding: '20px', backgroundColor: theme.background, minHeight: '100vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: theme.secondary, fontSize: '2rem', fontWeight: 'bold' }}>Admin Dashboard</h2>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <div style={statCardStyle}>
          <h3 style={{ color: theme.primary }}>Total Adhyayas</h3>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.secondary }}>18</span>
        </div>
        <div style={statCardStyle}>
          <h3 style={{ color: theme.primary }}>Total Shlokas</h3>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.secondary }}>700</span>
        </div>
        <div style={statCardStyle}>
          <h3 style={{ color: theme.primary }}>Active Users</h3>
          <span style={{ fontSize: '2rem', fontWeight: 'bold', color: theme.secondary }}>150</span>
        </div>
      </div>

      {/* Logout Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: theme.buttonColor,
            color: theme.buttonTextColor,
            padding: '12px 24px',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
