import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const navItems = [
    
    { path: "/profile", label: "MY STORE" },

    
  ];

  return (
    <div className="bg-[#17180c] text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white sm:text-xl">
          LetmeGrab
        </Link>

        {/* Navigation Items */}
        <ul className="flex gap-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="text-white hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {!user ? (
            <>
              <Link
                to="/login"
                className="hover:underline text-white text-sm"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 px-4 py-2 rounded text-sm hover:bg-blue-600 transition"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="text-sm">Welcome, {JSON.parse(user).username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded text-sm hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
