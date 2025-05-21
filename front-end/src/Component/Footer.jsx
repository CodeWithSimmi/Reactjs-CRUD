import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 w-full text-center shadow-inner">
      <h4 className="text-lg font-semibold">E-Commerce Dashboard</h4>
      <p className="text-sm mt-1">&copy; {new Date().getFullYear()} Simran Arora</p>
    </footer>
  );
};

export default Footer;
