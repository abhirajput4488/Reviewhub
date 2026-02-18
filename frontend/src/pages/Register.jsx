import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      return alert("Please fill all fields");
    }

    try {
      setLoading(true);

      const { data } = await API.post("/auth/register", {
        name,
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={submitHandler}
          className="border p-6 rounded shadow w-96 bg-white"
        >
          <h2 className="text-xl font-bold mb-4 text-center">Register</h2>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mb-3 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 w-full mb-3 rounded focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-3 rounded focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 transition text-white w-full py-2 rounded font-semibold"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
