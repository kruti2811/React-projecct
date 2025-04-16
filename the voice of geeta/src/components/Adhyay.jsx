import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/adhyay.css";

function Adhyay() {
  return (
    <div className="adhyay-container">
      <h2>Bhagavad Gita Adhyay</h2>
      <p>Self-Discipline & Control (Mind Mastery) – Control desires and emotions; they should not control you.</p>

      <div className="shloka-grid">
        {Array.from({ length: 6 }, (_, index) => (
          <div className="shloka-card" key={index}>
            <Link to={`/shloka/${index + 1}`} className="adhyay-title">
              <h2>Adhyay {index + 1}</h2>
            </Link>
            <img src={`/images/adhyay${index + 1}.jpg`} alt={`Adhyay ${index + 1}`} />
            
            {/* Redirect to individual audio and video pages */}
            <Link to={`/adhyay/audio/${index + 1}`}>
              <button className="audio-btn">🎤</button>
            </Link>
            <Link to={`/adhyay/video/${index + 1}`}>
              <button className="video-btn">📹</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adhyay;
