import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">ReviewHub</h1>
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/login" className="hover:text-gray-200">Login</Link>
        <Link to="/register" className="hover:text-gray-200">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
