import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserDashboard from "./components/Dashboard";
import Teachings from "./components/Teachings";
import Adhyay from "./components/Adhyay";
import Shloka from "./components/Shloka";
import Vedas from "./components/Vedas";
import Editprofile from "./components/editprofile";
import Login from "./components/login"
import Profile from "./components/profile";
import Register from "./components/register"
import AdhyayAudio from "./components/AdhyayAudio";
import AdhyayVideo from "./components/AdhyayVideo";

function UserRoutes() {
  return (
    <>
      <Navbar />  {/* ✅ User Panel ke liye Navbar */}
      <Routes>
        <Route path="/" element={<UserDashboard />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/adhyay" element={<Adhyay />} />
        <Route path="/shloka/:id" element={<Shloka />} />
        <Route path="/vedas" element={<Vedas />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/login" element ={<Login/>} />
        <Route path="/profile" element ={<Profile/>} />
        <Route path="/register" element ={<Register/>} />
        <Route path="/adhyay/audio/:id" element={<AdhyayAudio />} />
        <Route path="/adhyay/video/:id" element={<AdhyayVideo />} />


      </Routes>
    </>
  );
}

export default UserRoutes;
