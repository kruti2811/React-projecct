import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dailysholka = () => {
  const navigate = useNavigate();

  // Dummy Data (Replace with API data later)
  const [shlokas, setShlokas] = useState([
    {
      id: 1,
      adhyay: 7,
      description: `श्रीमद्भगवद गीता के दूसरे अध्याय के तीसरे श्लोक में कहा गया है,
      "हे अर्जुन! मूर्खता को मत प्राप्त हो, तुम्हें यह उचित नहीं जान पड़ती।
      हे परन्तप! हृदय की तुच्छ दुर्बलता को त्यागकर युद्ध के लिए खड़ा हो जा"।`,
      visible: true, // Controls visibility of the description
    },
  ]);

  // Toggle visibility of a Shloka
  const toggleVisibility = (id) => {
    setShlokas((prev) =>
      prev.map((shloka) =>
        shloka.id === id ? { ...shloka, visible: !shloka.visible } : shloka
      )
    );
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Admin Dashboard</h2>

      <table
        style={{
          width: "90%",
          margin: "auto",
          borderCollapse: "collapse",
          textAlign: "center",
          border: "1px solid #e0e0e0",
        }}
      >
        <thead style={{ backgroundColor: "#f9f9f9" }}>
          <tr style={{ border: "1px solid #e0e0e0" }}>
            <th style={{ padding: "10px" }}>Number</th>
            <th style={{ padding: "10px" }}>Adhyay</th>
            <th style={{ padding: "10px" }}>Shlokas Description</th>
            <th style={{ padding: "10px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shlokas.map((shloka, index) => (
            <tr key={shloka.id} style={{ border: "1px solid #e0e0e0" }}>
              <td style={{ padding: "10px" }}>{index + 1}</td>
              <td style={{ padding: "10px" }}>{shloka.adhyay}</td>
              <td style={{ padding: "10px", textAlign: "left" }}>
                {shloka.visible ? shloka.description : "Shloka Hidden"}
              </td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => toggleVisibility(shloka.id)}
                  style={{
                    backgroundColor: shloka.visible ? "#f44336" : "#4CAF50",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    marginRight: "5px",
                  }}
                >
                  {shloka.visible ? "Hide" : "Show"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Add New Shlokas Button */}
      <div style={{ textAlign: "right", width: "90%", margin: "20px auto" }}>
        <button
          onClick={() => navigate("/admin/addshloka")}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Add New Shlokas
        </button>
      </div>
    </div>
  );
};

export default dailysholka;
