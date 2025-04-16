import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  const loginAdmin = async () => {
    try {
      // Sending POST request to backend with username and password
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });

      // If response contains token, save it to localStorage and navigate to the dashboard
      if (res.data.token) {
        localStorage.setItem('adminToken', res.data.token); // Save token in localStorage
        navigate('/admin/dashboard'); // Redirect to Admin Dashboard
      } else {
        alert('Invalid credentials');
      }
    } catch (err) {
      console.error(err);
      alert('Login failed! Invalid credentials.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Login</h2>
      
      {/* Username input */}
      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} // Update username state
        style={styles.input}
      />

      {/* Password input */}
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} // Update password state
        style={styles.input}
      />

      {/* Login button */}
      <button onClick={loginAdmin} style={styles.button}>
        Login
      </button>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    width: '300px',
    margin: '50px auto',
    padding: '30px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};