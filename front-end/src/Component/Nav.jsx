import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track menu visibility
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div className="bg-[#17180c] text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white sm:text-xl">
          LetmeGrab
        </Link>

        {/* Desktop Navigation Items */}
        <ul className="hidden sm:flex gap-4 items-center">
          <li>
            <Link to="/profile" className="hover:text-gray-300 transition">
              My Store
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login" className="hover:underline text-white text-sm">
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

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <span>&#10005;</span> : <span>&#9776;</span>} {/* Close/Open Icon */}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <ul className="bg-[#17180c] text-white text-center">
            <li>
              <Link
                to="/profile"
                className="block py-2 hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                My Store
              </Link>
            </li>
            {!user ? (
              <>
                <li>
                  <Link
                    to="/login"
                    className="block py-2 hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="block py-2">Welcome, {JSON.parse(user).username}</span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false); // Close menu on logout
                    }}
                    className="block w-full text-left py-2 hover:bg-gray-800"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Nav;
