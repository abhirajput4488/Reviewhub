import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // 🔥 FIX: backend me user separate object nahi hai
      localStorage.setItem("token", data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          _id: data._id,
          name: data.name,
          email: data.email,
          role: data.role,
        })
      );

      alert("Login Successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={submitHandler}
          className="border p-6 rounded shadow w-96"
        >
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full mb-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
