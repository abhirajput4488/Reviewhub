import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow">
      <Link to="/" className="font-bold text-xl tracking-wide">
        ReviewHub
      </Link>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm">
              Welcome, <span className="font-semibold">{user.name}</span>
            </span>

            {user.role === "admin" && (
              <Link
                to="/admin"
                className="bg-yellow-500 text-black px-3 py-1 rounded-md text-sm hover:bg-yellow-400 transition"
              >
                Admin
              </Link>
            )}

            <button
              onClick={logoutHandler}
              className="bg-red-500 px-3 py-1 rounded-md text-sm hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-300">
              Login
            </Link>
            <Link to="/register" className="hover:text-gray-300">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
