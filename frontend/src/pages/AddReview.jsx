import React from "react";
import Navbar from "../components/Navbar";

const AddReview = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-10">
        <form className="border rounded-lg p-6 shadow-md w-96">
          <h2 className="text-xl font-bold mb-4">Add Review</h2>

          <input
            type="number"
            placeholder="Rating (1-5)"
            className="border p-2 w-full mb-3 rounded"
          />

          <textarea
            placeholder="Write your review..."
            rows="4"
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
