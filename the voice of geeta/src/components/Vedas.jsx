import React from "react";
import "../assets/css/vedas.css"; // Import the CSS file

function Vedas() {
  return (
    <div className="vedas-container">
      <h1>📜 Vedic Knowledge</h1>
      <p>Vedic wisdom is the foundation of spiritual, ethical, and scientific knowledge.</p>

      <div className="vedas-grid">
        <div className="veda-card">
          <h2>Rigveda</h2>
          <p>The oldest Veda, containing hymns about cosmic order and wisdom.</p>
        </div>
        <div className="veda-card">
          <h2>Yajurveda</h2>
          <p>Describes the rituals and sacrifices performed in Vedic times.</p>
        </div>
        <div className="veda-card">
          <h2>Samaveda</h2>
          <p>Focuses on musical chants and their spiritual significance.</p>
        </div>
        <div className="veda-card">
          <h2>Atharvaveda</h2>
          <p>Contains practical knowledge about medicine, society, and daily life.</p>
        </div>
      </div>
    </div>
  );
}

export default Vedas;
