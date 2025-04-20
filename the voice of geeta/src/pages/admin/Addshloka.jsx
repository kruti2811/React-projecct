import React, { useState } from 'react';
import axios from 'axios';

const AddShloka = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/add-shloka', {
        title,
        content,
        visible: true,
      });

      console.log('✅ Shloka added:', res.data);
      setMessage('Shloka added successfully!');
    } catch (error) {
      console.error('Error adding shloka:', error);
      setMessage('Error adding shloka.');
    }
  };

  // Theme colors
  const theme = {
    primary: '#ff914d', // spiritual orange
    secondary: '#293241', // deep blue/gray
    background: '#fffaf5', // light creamy background
    textColor: '#293241', // text color
    buttonColor: '#ff914d',
    buttonTextColor: 'white',
    borderColor: '#293241',
    hoverColor: '#ff6f2d',  // Slightly darker orange for hover
  };

  // CSS styles for the component
  const containerStyle = {
    padding: '40px',
    backgroundColor: theme.background,
    borderRadius: '12px',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '700px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: '"Inclusive Sans", sans-serif',
  };

  const titleStyle = {
    fontSize: '2.5rem', 
    fontWeight: 'bold',
    color: theme.secondary,
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const inputStyle = {
    width: '100%',
    padding: '16px',
    marginBottom: '20px', 
    border: `2px solid ${theme.borderColor}`,
    borderRadius: '8px',
    fontSize: '1.2rem',
    color: theme.textColor,
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  };

  const buttonStyle = {
    padding: '16px 32px',
    backgroundColor: theme.buttonColor,
    color: theme.buttonTextColor,
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.2rem',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '250px',
    marginTop: '30px',
    transition: 'background-color 0.3s ease',
  };

  // Hover effect for button
  const buttonHoverStyle = {
    backgroundColor: theme.hoverColor,
  };

  const checkboxLabelStyle = {
    display: 'inline-block',
    marginTop: '15px',
    marginBottom: '25px',
    fontSize: '1.2rem',
    color: theme.secondary,
  };

  const messageStyle = {
    marginTop: '20px',
    color: message.includes('Error') ? 'red' : 'green',
    fontWeight: 'bold',
    fontSize: '1.1rem',
  };

  return (
    <div style={{ padding: '100px', backgroundColor: theme.background, minHeight: '100vh' }}>
    <div style={containerStyle}>
      <h2 style={titleStyle}>Add New Shloka</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          style={inputStyle}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <div style={checkboxLabelStyle}>
          <label>
            Visible:
            <input
              type="checkbox"
              checked={visible}
              onChange={(e) => setVisible(e.target.checked)}
            />
          </label>
        </div>
        <button 
          style={{...buttonStyle, ':hover': buttonHoverStyle}} 
          type="submit">
          Add Shloka
        </button>
      </form>
      <p style={messageStyle}>{message}</p>
    </div>
    </div>
  );
};

export default AddShloka;
