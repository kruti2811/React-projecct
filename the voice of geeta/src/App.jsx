import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"; // ✅ Home page is Dashboard
import Teachings from "./components/Teachings";
import Adhyay from "./components/Adhyay";
import Shloka from "./components/Shloka";
import Vedas from "./components/Vedas";

import Login from "./components/Login";
import Editprofile from "./components/editprofile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />{/* ✅ Dashboard as Home */}
        <Route path="/adhyay" element={<Adhyay />} />
        <Route path="/shloka/:id" element={<Shloka />} /> 
        <Route path="/vedas" element={<Vedas />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
