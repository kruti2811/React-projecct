import React from "react";
import { useNavigate } from "react-router-dom";

const Editprofile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-purple-800">
      <div className="w-full max-w-md p-8 bg-opacity-10 bg-white rounded-2xl shadow-lg">
        <div className="flex justify-between mb-6">
          <div className="flex justify-center w-full">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-16 h-16 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 14l4-4m0 0l-4-4m4 4H8m4 10a10 10 0 100-20 10 10 0 000 20z"
                />
              </svg>
            </div>
          </div>
          <div className="relative">
            <button className="text-white focus:outline-none">☰</button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg overflow-hidden z-10">
              <button
                onClick={() => navigate("/editprofile")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Editprofile;
