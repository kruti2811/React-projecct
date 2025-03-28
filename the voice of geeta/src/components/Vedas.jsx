import React, { useState } from "react";
import '../assets/css/vedas.css';

const Vedas = () => {
  // State to track which Veda is active
  const [activeVeda, setActiveVeda] = useState(null);

  // Vedas data
  const vedas = [
    { name: "Rigveda", content: "हमेशा सत्य और ज्ञान की तलाश करें, विविध इतिहासों का सम्मान करें और प्रकृति के साथ सद्भाव में रहें।" },
    { name: "Samaveda", content: "संगीत और मंत्रों की शक्ति का उपयोग करें, आध्यात्मिक जागरूकता को बढ़ावा दें।" },
    { name: "Yajurveda", content: "अनुष्ठानों और यज्ञों के माध्यम से अपने कार्यों को शुद्ध करें और समाज की भलाई के लिए सेवा करें।" },
    { name: "Atharvaveda", content: "जीवन में व्यावहारिक ज्ञान अपनाएं, स्वास्थ्य और समृद्धि के लिए प्रयास करें।" }
  ];

  // Function to toggle Veda content
  const toggleVeda = (vedaName) => {
    setActiveVeda(activeVeda === vedaName ? null : vedaName);
  };

  return (
    <div className="veda-container">
      <h2>📖 <span className="title">The Vedas</span></h2>
      <div className="vedas-list">
        {vedas.map((veda, index) => (
          <div key={index} className="veda-item">
            <button className="veda-btn" onClick={() => toggleVeda(veda.name)}>
              {veda.name}
            </button>
            {activeVeda === veda.name && (
              <div className="veda-content">
                {veda.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vedas;
