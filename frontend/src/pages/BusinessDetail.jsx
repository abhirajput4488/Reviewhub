import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ReviewCard from "../components/ReviewCard";
import { Link, useParams } from "react-router-dom";
import API from "../api/axios";

const BusinessDetail = () => {
  const { id } = useParams();

  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const { data } = await API.get(`/businesses/${id}`);
        setBusiness(data);

        const reviewRes = await API.get(`/reviews/${id}`);
        setReviews(reviewRes.data);
      } catch (error) {
        console.error("Error fetching business details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBusinessData();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10 text-gray-500">Loading...</p>
      </>
    );
  }

  if (!business) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10 text-red-500">
          Business not found
        </p>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        {/* Business Info */}
        <h2 className="text-3xl font-bold mb-2">{business.name}</h2>
        <p className="text-gray-600">Category: {business.category}</p>
        <p className="text-gray-600">Location: {business.location}</p>
        <p className="text-yellow-500 font-semibold mt-2">
          ⭐ {business.avgRating?.toFixed(1) || "0.0"}
        </p>

        {/* Add Review Button */}
        <Link
          to={`/review/${business._id}`}
          className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Review
        </Link>

        {/* Reviews Section */}
        <h3 className="text-2xl font-semibold mt-8 mb-4">Reviews</h3>

        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BusinessDetail;
