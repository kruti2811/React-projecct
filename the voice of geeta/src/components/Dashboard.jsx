import React, { useState, useEffect } from "react";
import "../assets/css/dashboard.css"; // Import CSS file

function UserDashboard() {
  const [shloka, setShloka] = useState(null); // State to hold the shloka data

  useEffect(() => {
    // Fetch the most recent shloka from the API
    fetch("http://localhost:5000/api/shlokas/today")
      .then((response) => response.json())
      .then((data) => setShloka(data))
      .catch((error) => console.error("Error fetching daily shloka:", error));
  }, []); // Run this effect once when the component is mounted

  return (
    <div className="dashboard-container">
      <h2 className="page-title">📖 Voice of Geeta</h2>
      <p className="subtitle">Discover the timeless wisdom of the Bhagavad Gita.</p>

      <button className="explore-btn">Explore Geeta</button>

      {/* Cards Section */}
      <div className="cards">
        {/* Bhagavad Gita Card */}
        <div className="card">
          <h3>📿 Bhagavad Gita</h3>
          <p>
            The Bhagavad Gita is a guide to self-realization, righteousness, and spiritual awakening, leading to inner peace and success.
          </p>
        </div>

        {/* Vedic Knowledge Card */}
        <div className="card">
          <h3>📜 Vedic Knowledge</h3>
          <p>
            Vedic knowledge is a complete guide to life, teaching spirituality, ethics, science, and self-discipline, leading to ultimate wisdom and inner peace.
          </p>
        </div>

        {/* Daily Shloka Card */}
        <div className="card">
          {/* Check if shloka exists, then display it */}
          {shloka ? (
            <div className="shloka-content">
              <h4>📖 Today's Shloka</h4>
              <p className="sanskrit">{shloka.title}</p> {/* Display the Sanskrit Shloka */}
              <p className="meaning"><strong>Meaning:</strong> {shloka.content}</p> {/* Display the Meaning */}
            </div>
          ) : (
            <p>Loading today's shloka...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
