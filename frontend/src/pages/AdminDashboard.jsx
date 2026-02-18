import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";

const AdminDashboard = () => {
  const [reviews, setReviews] = useState([]);

  // NEW — business form state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const fetchPending = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await API.get("/reviews/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setReviews(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  // NEW — create business
  const createBusiness = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/businesses",
        { name, category, location, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Business added");
      setName("");
      setCategory("");
      setLocation("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Failed to add business");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/reviews/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      fetchPending();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">

        {/* CREATE BUSINESS */}
        <h2 className="text-2xl font-bold mb-3">Add Business</h2>
        <form onSubmit={createBusiness} className="border p-4 rounded mb-8">
          <input
            placeholder="Business Name"
            className="border p-2 w-full mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Category"
            className="border p-2 w-full mb-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <input
            placeholder="Location"
            className="border p-2 w-full mb-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            className="border p-2 w-full mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Business
          </button>
        </form>

        {/* REVIEW APPROVAL */}
        <h2 className="text-2xl font-bold mb-4">Admin Review Approval</h2>

        {reviews.length === 0 ? (
          <p>No pending reviews</p>
        ) : (
          reviews.map((r) => (
            <div key={r._id} className="border p-4 rounded mb-3">
              <p><b>Business:</b> {r.business?.name}</p>
              <p><b>User:</b> {r.user?.name}</p>
              <p><b>Rating:</b> ⭐ {r.rating}</p>
              <p className="mb-2">{r.comment}</p>

              <div className="space-x-2">
                <button
                  onClick={() => updateStatus(r._id, "approved")}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(r._id, "rejected")}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default AdminDashboard;
