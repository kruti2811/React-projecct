import React from "react";
import "../assets/css/teachings.css"; // Import the CSS file

function Teachings() {
  return (
    <div className="teachings-container">
      {/* Title */}
      <h1>📜 Bhagavad Geeta Teachings</h1>

      {/* Teachings Grid */}
      <div className="teachings-grid">
        <div className="teaching-card">
          <h2>(Karma Yoga - Chapter 2, Verse 47)</h2>
          <p>
            1️⃣ Work with dedication but without attachment to results.
            <br />
            <br />
            🔥 Application: Focus on efforts, not outcomes. Do your duty sincerely in work, relationships, and personal growth.
          </p>
        </div>

        <div className="teaching-card">
          <h2>(Jnana Yoga - Chapter 4, Verse 34)</h2>
          <p>
            2️⃣ Seek knowledge and self-awareness.
            <br />
            <br />
            🔥 Application: Always be a learner. Question, analyze, and grow intellectually to make better decisions.
          </p>
        </div>

        <div className="teaching-card">
          <h2>(Bhakti Yoga - Chapter 9, Verse 22)</h2>
          <p>
            3️⃣ Have faith and practice gratitude.
            <br />
            <br />
            🔥 Application: Trust in divine guidance, express gratitude daily, and stay positive in tough times.
          </p>
        </div>

        <div className="teaching-card">
          <h2>(Dhyana Yoga - Chapter 6, Verse 6)</h2>
          <p>
            4️⃣ Meditate to control the mind and emotions.
            <br />
            🔥 Application: Develop focus and inner peace by practicing mindfulness and meditation.
          </p>
        </div>

        <div className="teaching-card">
          <h2>The Path of Selfless Action</h2>
          <p>Work with sincerity and dedication but don’t stress over outcomes.</p>
        </div>

        <div className="teaching-card">
          <h2>The Path of Meditation</h2>
          <p>A controlled mind leads to liberation, while an uncontrolled mind leads to bondage.</p>
        </div>

        <div className="teaching-card">
          <h2>The Path of Renunciation</h2>
          <p>Let go of ego and attachments to find real happiness.</p>
        </div>

        <div className="teaching-card">
          <h2>Equanimity (Samabhava)</h2>
          <p>Treating joy and sorrow, success and failure alike.</p>
        </div>
      </div>
    </div>
  );
}

export default Teachings;
