import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { color } from "framer-motion";

const Addshloka = () => {
  const [adhyayNumber, setAdhyayNumber] = useState("");
  const [shlokaDescription, setShlokaDescription] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/admin/addshloka", {
        adhyayNumber,
        shlokaDescription,
      });

      if (response.status === 200) {
        alert("Shloka added successfully!");
        navigate("/admin/dashboard"); // Redirect to dashboard
      }
    } catch (error) {
      console.error("Error adding shloka:", error);
      alert("Failed to add shloka.");
    }
  };

  // Auto-expand textarea
  const autoExpand = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Shloka</h2>

      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label>Adhyay Number</label>
          <input
            type="number"
            value={adhyayNumber}
            onChange={(e) => setAdhyayNumber(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label>Shloka Description <small>(Max 500 characters)</small></label>
          <textarea
            value={shlokaDescription}
            onChange={(e) => setShlokaDescription(e.target.value)}
            onInput={autoExpand}
            maxLength="500"
            rows="4"
            style={styles.textarea}
            required
          ></textarea>
        </div>

        <button type="submit" style={styles.button}>Add Shloka</button>
      </form>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "bold",
    color:"black",
  },
  formGroup: {
    marginBottom: "20px",
    color:"black",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    minHeight: "100px",
    resize: "none",
  },
  button: {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Addshloka;
