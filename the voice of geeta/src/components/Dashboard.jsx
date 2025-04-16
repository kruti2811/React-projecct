import React from "react";
import "../assets/css/dashboard.css"; // Import CSS file


function UserDashboard() {
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
          <h3>🔔 Daily Shlokas</h3>
          <p>
            Take the first step today! Begin your journey towards spiritual growth, resilience, and true happiness. Share this wisdom with others and uplift those around you!
          </p>
        </div>
      </div>
    </div>
  );
}



import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
};

export default UserDashboard;

