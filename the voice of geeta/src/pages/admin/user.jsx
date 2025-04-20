import React, { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [activeUsers, setActiveUsers] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch active users data when the component mounts
    const fetchActiveUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/active-users');
        setActiveUsers(response.data);
      } catch (error) {
        setMessage('Error fetching active users');
        console.error('Error fetching active users:', error);
      }
    };

    fetchActiveUsers();
  }, []);

  // CSS-in-JS styling object
  const styles = {
    container: {
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '80%',
      maxWidth: '800px',
      margin: '20px',
    },
    heading: {
      color: '#2c3e50',
      textAlign: 'center',
    },
    message: {
      color: '#e74c3c',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      padding: '10px',
      textAlign: 'left',
      backgroundColor: '#3498db',
      color: 'white',
    },
    td: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
      backgroundColor: '#f9f9f9',
    },
    trEven: {
      backgroundColor: '#ecf0f1',
    },
    noUsers: {
      textAlign: 'center',
      fontStyle: 'italic',
      color: '#95a5a6',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Active Users</h2>
      {message && <p style={styles.message}>{message}</p>}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Username</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Password</th>
          </tr>
        </thead>
        <tbody>
          {activeUsers.length > 0 ? (
            activeUsers.map((user, index) => (
              <tr key={user.id} style={index % 2 === 0 ? styles.trEven : {}}>
                <td style={styles.td}>{user.id}</td>
                <td style={styles.td}>{user.username}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={styles.noUsers}>No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
