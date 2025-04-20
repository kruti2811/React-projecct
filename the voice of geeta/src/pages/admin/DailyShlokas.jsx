import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DailyShloka = () => {
  const [shlokas, setShlokas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3000/api/shlokas/today')
      .then((res) => {
        setShlokas(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching shlokas:', err);
        setLoading(false);
      });
  }, []);

  const theme = {
    primary: '#ff914d',
    secondary: '#293241',
    background: '#fffaf5',
    textColor: '#293241',
    buttonColor: '#ff914d',
    buttonTextColor: 'white',
    hoverBackground: '#f1f1f1',
  };

  const containerStyle = {
    padding: '20px',
    backgroundColor: theme.background,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: theme.secondary,
    textAlign: 'center',
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const tableStyle = {
    width: '90%',
    maxWidth: '1200px',
    borderCollapse: 'collapse',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginTop: '30px',
  };

  const thTdStyle = {
    padding: '16px',
    textAlign: 'center',
    fontSize: '1.1rem',
    color: theme.textColor,
    borderBottom: '2px solid #ddd',
    transition: 'background-color 0.3s ease',
  };

  const thStyle = {
    backgroundColor: theme.primary,
    padding: '17px',
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const noDataStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#888',
    fontSize: '1.2rem',
    fontStyle: 'italic',
  };

  const tableRowStyle = {
    ...thTdStyle,
    cursor: 'pointer',
  };

  const toggleVisibility = (id) => {
    setShlokas((prevShlokas) =>
      prevShlokas.map((shloka) => {
        if (shloka.id === id) {
          return { ...shloka, visible: !shloka.visible };
        } else {
          return shloka;
        }
      })
    );
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Today's Shlokas</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Title</th>
              <th style={thStyle}>Content</th>
              <th style={thStyle}>Visible</th>
              <th style={thStyle}>Created At</th>
              <th style={thStyle}>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {shlokas.length > 0 ? (
              shlokas.filter(shloka => shloka.visible).map((shloka) => (
                <tr key={shloka.id} style={tableRowStyle}>
                  <td style={thTdStyle}>{shloka.id}</td>
                  <td style={thTdStyle}>{shloka.title}</td>
                  <td style={thTdStyle}>{shloka.content}</td>
                  <td style={thTdStyle}>
                    <button
                      style={{
                        backgroundColor: shloka.visible ? theme.primary : '#ddd',
                        color: shloka.visible ? 'white' : '#333',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                      }}
                      onClick={() => toggleVisibility(shloka.id)}
                    >
                      {shloka.visible ? 'Hide' : 'Show'}
                    </button>
                  </td>
                  <td style={thTdStyle}>{new Date(shloka.createdAt).toLocaleString()}</td>
                  <td style={thTdStyle}>{new Date(shloka.updatedAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={noDataStyle}>No Shlokas available for today</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DailyShloka;