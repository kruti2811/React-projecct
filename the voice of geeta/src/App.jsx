import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"; // ✅ Home page is Dashboard
import Teachings from "./components/Teachings";
import Adhyay from "./components/Adhyay";
import Shloka from "./components/Shloka";
import Vedas from "./components/Vedas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />  {/* ✅ Dashboard as Home */}
        <Route path="/adhyay" element={<Adhyay />} />
        <Route path="/shloka/:id" element={<Shloka />} /> 
        <Route path="/vedas" element={<Vedas />} />
        <Route path="/teachings" element={<Teachings />} />
      </Routes>
    </Router>
  );
}

export default App;
