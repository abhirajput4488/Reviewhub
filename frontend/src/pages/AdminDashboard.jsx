import React from "react";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Admin Review Approval</h2>

        <div className="border p-4 rounded mb-3">
          <p className="mb-2">Review: Great Service & Clean Shop</p>
          <div className="space-x-2">
            <button className="bg-green-600 text-white px-3 py-1 rounded">
              Approve
            </button>
            <button className="bg-red-600 text-white px-3 py-1 rounded">
              Reject
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
