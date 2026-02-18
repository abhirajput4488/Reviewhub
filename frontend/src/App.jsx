import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BusinessDetail from "./pages/BusinessDetail";
import AddReview from "./pages/AddReview";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business/:id" element={<BusinessDetail />} />
      <Route path="/review/:id" element={<AddReview />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
};

export default App;
