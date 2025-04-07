import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard"; // ✅ Home page is Dashboard
import Teachings from "./components/Teachings";
import Adhyay from "./components/Adhyay";
import Shloka from "./components/Shloka";
import Vedas from "./components/Vedas";
import Editprofile from "./components/editprofile";

import Login from "./pages/admin/login.jsx";
import AdminNavbar from "./components/AdminNavbar.jsx";
import User from "./pages/admin/user.jsx";

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

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminNavbar><Dashboard /></AdminNavbar>} />
        <Route path="/admin/users" element={<AdminNavbar><User /></AdminNavbar>} />
      
      </Routes>
    </Router>
  );
}

export default App;
