import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">
          Logo
        </Link>
        <div>
          {!user ? (
            <>
              <Link
                to="/login"
                className="mr-4 hover:underline"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <span className="mr-4">Welcome, {JSON.parse(user).username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
