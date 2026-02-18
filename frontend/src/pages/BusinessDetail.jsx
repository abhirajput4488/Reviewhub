import React from "react";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";
import { Link } from "react-router-dom";

const dummyReviews = [
  { rating: 5, comment: "Excellent service!" },
  { rating: 4, comment: "Good experience overall." },
];

const BusinessDetail = () => {
  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Business Name</h2>
        <p className="text-gray-600">Category: Restaurant</p>
        <p className="text-gray-600 mb-4">Location: Delhi</p>

        <Link
          to="/review/1"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Review
        </Link>

        <h3 className="text-xl font-semibold mt-6 mb-3">Reviews</h3>
        {dummyReviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </>
  );
};

export default BusinessDetail;
