import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Username and Password are required!");
      return;
    }
    setError(""); // Clear error on successful input
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p className="text-center text-gray-600">Start Your Life with Divine Wisdom!</p>
        <div className="flex justify-center py-4">
          <img src="/images/krishnaicon.png" alt="Krishna Icon" className="w-16" />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Enter Your Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            value={formData.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <p className="text-blue-500 text-center cursor-pointer mt-4">Forgot Password?</p>
      </div>
      <div className="hidden md:flex w-1/2 justify-center">
        <img src="/images/bhgvad_geeta1.png" alt="Bhagavad Gita" className="w-80" />
      </div>
    </div>
  );
};

export default Login;