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
            <p>धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः <br /> मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.2</h3>
            <p>कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। <br /> मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.3</h3>
            <p>धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः <br /> मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय</p>
          </div>
          <div className="shloka-card">
            <h3>Shloka {id}.4</h3>
            <p>धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः <br /> मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shloka;
