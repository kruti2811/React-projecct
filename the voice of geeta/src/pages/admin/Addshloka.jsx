import React, { useState } from 'react';

function AdminPanel() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState(''); // State to hold success or error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    // Post the new shloka to the server
    fetch('http://localhost:5000/api/shlokas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Shloka added:', data);
        setMessage('Shloka added successfully!'); // Show success message
        document.querySelector('.message').classList.add('success'); // Add success class
        // Optionally, reset form values
        setTitle('');
        setContent('');
      })
      .catch((error) => {
        console.error('Error adding shloka:', error);
        setMessage('Failed to add shloka. Please try again.'); // Show error message
        document.querySelector('.message').classList.add('error'); // Add error class
      });
  };

  // Inline styles for the Admin Panel
  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f4f4f4',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    formDiv: {
      marginBottom: '15px',
    },
    label: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '5px',
      color: '#333',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      width: '100%',
    },
    textarea: {
      padding: '10px',
      fontSize: '16px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      width: '100%',
      minHeight: '100px',
    },
    button: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '12px',
      fontSize: '18px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    message: {
      marginTop: '20px',
      padding: '12px',
      fontSize: '18px',
      borderRadius: '6px',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    successMessage: {
      backgroundColor: '#4caf50',
      color: 'white',
    },
    errorMessage: {
      backgroundColor: '#f44336',
      color: 'white',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Shloka</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formDiv}>
          <label htmlFor="title" style={styles.label}>Title (Sanskrit Shloka):</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formDiv}>
          <label htmlFor="content" style={styles.label}>Meaning:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        >
          Add Shloka
        </button>
      </form>

      {/* Display the success or error message */}
      {message && (
        <p
          className="message"
          style={message === 'Shloka added successfully!' ? styles.successMessage : styles.errorMessage}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default AdminPanel;
