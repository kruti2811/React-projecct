import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserRoutes from "./UserRoutes";  // 🟢 User Routes
import AdminRoutes from "./AdminRoutes"; // 🔴 Admin Routes

function App() {
  return (
    <Router>
      <Routes>
        {/* 🟢 User Panel Routes */}
        <Route path="/*" element={<UserRoutes />} />

        {/* 🔴 Admin Panel Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
