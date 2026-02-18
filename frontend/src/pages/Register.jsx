import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form className="border p-6 rounded shadow w-96">
          <h2 className="text-xl font-bold mb-4">Register</h2>

          <input
            type="text"
            placeholder="Name"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3 rounded"
          />

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
