import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/dashboard";
import User from "./pages/admin/user";
import Addshloka from "./pages/admin/Addshloka";
import AdminProfile from "./pages/admin/profile";

function AdminRoutes() {
  const isAuthenticated = localStorage.getItem("adminToken"); // ✅ Check if Admin is Logged In

  return (
    <Routes>
      {/* 🔑 Public Route for Admin Login */}
      <Route path="/login" element={<AdminLogin />} />

      {/* 🔐 Protected Admin Routes */}
      {isAuthenticated ? (
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} /> {/* ✅ Correct Route */}
          <Route path="user" element={<User />} /> {/* ✅ Correct Route */}
          <Route path="addshloka" element={<Addshloka />} /> {/* ✅ Correct Route */}
          <Route path="profile" element={<AdminProfile />} /> {/* ✅ Correct Route */}
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/admin/login" />} />
      )}
    </Routes>
  );
}

export default AdminRoutes;
