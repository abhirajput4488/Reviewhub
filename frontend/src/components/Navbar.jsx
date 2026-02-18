import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">ReviewHub</h1>

        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/login" className="hover:text-gray-200">Login</Link>
          <Link to="/register" className="hover:text-gray-200">Register</Link>
          <Link to="/admin" className="hover:text-gray-200">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
