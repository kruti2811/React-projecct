import { useState } from 'react';
import axios from 'axios';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginAdmin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', {
        username,
        password,
      });
      alert('Login successful');
      localStorage.setItem('adminToken', res.data.token);
    } catch (err) {
      console.error(err); // Good to keep for debugging
      alert('Invalid credentials');
    }
  };
  

  return (
    <div>
      <h2>Admin Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={loginAdmin}>Login</button>
    </div>
  );
}
