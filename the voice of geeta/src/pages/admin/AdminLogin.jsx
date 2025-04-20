import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const defaultUsername = "admin";
    const defaultPassword = "123";

    if (username === defaultUsername && password === defaultPassword) {
      localStorage.setItem("adminToken", "dummyToken123");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fffaf5",
      backgroundImage: "url('/images/bg-pattern.png')", // Optional subtle pattern
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      padding: "20px",
    },
    form: {
      backgroundColor: "#ffffff",
      padding: "40px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      border: "2px solid #ff914d",
    },
    heading: {
      fontSize: "30px",
      color: "#ff914d",
      textAlign: "center",
      marginBottom: "24px",
      fontFamily: "'Inclusive Sans', sans-serif",
      letterSpacing: "1px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "600",
      color: "#293241",
    },
    input: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "10px",
      border: "1.5px solid #ddd",
      marginBottom: "20px",
      fontSize: "16px",
      fontFamily: "sans-serif",
      outline: "none",
      transition: "0.3s border ease",
    },
    inputFocus: {
      borderColor: "#ff914d",
    },
    button: {
      width: "100%",
      padding: "12px 0",
      backgroundColor: "#ff914d",
      color: "white",
      border: "none",
      borderRadius: "8px",
      fontWeight: "600",
      fontSize: "16px",
      cursor: "pointer",
      fontFamily: "'Inclusive Sans', sans-serif",
      transition: "background-color 0.3s ease",
    },
    error: {
      color: "red",
      textAlign: "center",
      marginBottom: "15px",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.heading}>Admin Login</h2>

        {error && <p style={styles.error}>{error}</p>}

        <div>
          <label style={styles.label}>Username</label>
          <input
            type="text"
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter admin username"
          />
        </div>

        <div>
          <label style={styles.label}>Password</label>
          <input
            type="password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter password"
          />
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
