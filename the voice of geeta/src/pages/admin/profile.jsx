import React from "react";

const AdminProfile = () => {
  return (
    <div className="bg-white p-6 rounded-lg max-w-md mx-auto shadow-md mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Admin Profile</h2>
      <div className="profile-details text-lg text-gray-700">
        <p><strong className="text-gray-900">Username:</strong> admin123</p>
        <p><strong className="text-gray-900">Password:</strong> ********</p>
      </div>
    </div>
  );
};

export default AdminProfile;
