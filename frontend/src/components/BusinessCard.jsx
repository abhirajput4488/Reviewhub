import React from "react";
import { Link } from "react-router-dom";

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white border rounded-xl p-5 shadow hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-gray-800">
        {business.name}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {business.category} • {business.location}
      </p>

      <p className="text-yellow-500 font-medium mt-2">
        ⭐ {business.avgRating ? Number(business.avgRating).toFixed(1) : "0.0"}
      </p>

      <Link
        to={`/business/${business._id}`}
        className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
      >
        View Details →
      </Link>
    </div>
  );
};

export default BusinessCard;
