import React, { useState, useEffect } from "react";
import "../assets/css/dashboard.css";

function UserDashboard() {
  const [shloka, setShloka] = useState(null);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility state

  useEffect(() => {
    // Fetch today's shloka only if it is visible
    const fetchDailyShloka = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/shlokas/today");
        if (!response.ok) {
          throw new Error("Failed to fetch today's shloka");
        }
        const data = await response.json();

        // Set the first visible shloka if available
        if (data.length > 0 && data[0].visible) {
          setShloka(data[0]); // Display the first shloka in the response
        } else {
          setError("No shloka available for today.");
        }
      } catch (err) {
        console.error("❌ Error fetching daily shloka:", err);
        setError("Unable to load today's shloka.");
      }
    };

    fetchDailyShloka();
  }, []); // Empty dependency array ensures this runs once on mount

  const handleShowShloka = () => {
    setIsVisible(true); // Set visibility to true when the button is clicked
  };

  return (
    <div className="dashboard-container">
      <h2 className="page-title">📖 Voice of Geeta</h2>
      <p className="subtitle">
        Discover the timeless wisdom of the Bhagavad Gita.
      </p>

      <button className="explore-btn">Explore Geeta</button>

      <div className="cards">
        {/* Bhagavad Gita Card */}
        <div className="card">
          <h3>📿 Bhagavad Gita</h3>
          <p>
            The Bhagavad Gita is a guide to self-realization, righteousness,
            and spiritual awakening, leading to inner peace and success.
          </p>
        </div>

        {/* Vedic Knowledge Card */}
        <div className="card">
          <h3>📜 Vedic Knowledge</h3>
          <p>
            Vedic knowledge is a complete guide to life, teaching spirituality,
            ethics, science, and self-discipline, leading to ultimate wisdom
            and inner peace.
          </p>
        </div>

        {/* Daily Shloka Card */}
        <div className="card">
          <h3>🕉️ Today's Shloka</h3>
          {shloka ? (
            isVisible ? (
              <>
                <p className="sanskrit"> {shloka.title}</p>
                <p className="meaning">
                  <strong>Meaning:</strong> {shloka.content}
                </p>
              </>
            ) : (
              <button className="show-btn" onClick={handleShowShloka}>
                Show Shloka
              </button>
            )
          ) : (
            <p>{error || "Loading..."}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
