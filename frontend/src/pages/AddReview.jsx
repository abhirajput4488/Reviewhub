import React, { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";

const AddReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/reviews",
        {
          rating: Number(rating),
          comment,
          businessId: id, // 🔥 FIXED
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Review submitted for approval!");
      navigate(`/business/${id}`);
    } catch (error) {
      console.error(error.response?.data);
      alert(error.response?.data?.message || "Review submit failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <form
          onSubmit={submitHandler}
          className="border rounded-lg p-6 shadow-md w-96"
        >
          <h2 className="text-xl font-bold mb-4">Add Review</h2>

          <input
            type="number"
            min="1"
            max="5"
            required
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />

          <textarea
            rows="4"
            required
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />

          <button className="bg-blue-600 text-white w-full py-2 rounded">
            Submit Review
          </button>
        </form>
      </div>
    </>
  );
};

export default AddReview;
