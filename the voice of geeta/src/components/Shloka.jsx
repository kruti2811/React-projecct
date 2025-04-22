import React from "react";
import { useParams } from "react-router-dom";
import "../assets/css/shloka.css"; // Import CSS file

function Shloka() {
  const { id } = useParams(); // Get Adhyay ID from URL

  return (
    <div className="shloka-container">
      <h1>📜 Bhagavad Geeta Adhyay {id} Shlokas</h1>
      <br />
      <div className="shloka-wrapper">
        <h2>Adhyay {id} Shloka</h2>
        <div className="shloka-grid">
          <div className="shloka-card">
            <h3>Shloka {id}.1</h3>
            <p>सञ्जय उवाच | दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा | <br/> आचार्यमुपसंगम्य राजा वचनमब्रवीत् ||</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.2</h3>
            <p>पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् | <br/> व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.3</h3>
            <p>त्रिनेत्रेण महात्मना | तव शिष्येण कौरवाणामुपदिष्टा |<br />  शत्रु युक्तं पराक्रमेण पश्य स्वधर्मान ||</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.4</h3>
            <p>पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम् |<br /> व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता ||</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.5</h3>
            <p>धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान् |<br /> पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुंगवः ||</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.6</h3>
            <p>युयुत्सवः सर्वे तैर्द्रष्टव्याः सत्यपराक्रमाः। <br/>
            नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः।</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shloka;
