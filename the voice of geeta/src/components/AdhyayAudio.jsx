import React from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/adhyayDetail.css"; // 👈 Add this CSS file

const adhyayDescriptions = {
  1: "Adhyay 1 - Arjuna Vishada Yoga: Arjuna’s despair on the battlefield, symbolizing human confusion.",
  2: "Adhyay 2 - Sankhya Yoga: The essence of Gita begins here, teaching the soul's immortality.",
  3: "Adhyay 3 - Karma Yoga: Importance of selfless action and duty.",
  4: "Adhyay 4 - Jnana Karma Sanyasa Yoga: Divine wisdom and how knowledge purifies the soul.",
  5: "Adhyay 5 - Karma Sanyasa Yoga: Balancing renunciation and action.",
  6: "Adhyay 6 - Dhyana Yoga: The power and path of meditation."
};

function AdhyayAudio() {
  const { id } = useParams();
  const description = adhyayDescriptions[id] || "Explore the divine teachings in this Adhyay.";

  return (
    <div className="adhyay-detail-container">
      <h2>Adhyay {id} - Audio</h2>
      <p className="adhyay-description">{description}</p>

      <audio controls className="media-player">
        <source src={`/audio/adhyay${id}.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <Link to="/adhyay" className="back-button">⬅ Back to Adhyay</Link>
    </div>
  );
}

export default AdhyayAudio;
