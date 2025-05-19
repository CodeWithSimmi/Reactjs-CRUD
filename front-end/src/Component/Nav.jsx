import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    console.log("Logout button clicked");
    localStorage.clear("user"); // Remove user data
    navigate('/signup');
  };

  const navItems = [
    { path: "/", label: "Products" },
    { path: "/add", label: "Add Product" },
    { path: "/update", label: "Update Product" },
    ...(auth
      ? [{ path: "#", label: "Logout", action: logout }]
      : [{ path: "/signup", label: "Sign Up" }]),
    { path: "/profile", label: "Profile" },
  ];

  return (
    <div>
      <div className="bg-blue-500 text-white p-4">
        <ul className="flex gap-8 justify-center items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.action ? (
                <button
                  onClick={item.action}
                  className="text-blue-500 p-1  bg-white border-none  cursor-pointer rounded-sm"
                >
                  {item.label}
                </button>
              ) : (
                <Link to={item.path}>{item.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
