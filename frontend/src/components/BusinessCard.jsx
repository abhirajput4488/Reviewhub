import React from "react";
import { Link } from "react-router-dom";

const BusinessCard = ({ business }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{business.name}</h2>
      <p className="text-gray-600">{business.category}</p>
      <p className="text-gray-500">{business.location}</p>

      <Link
        to={`/business/${business._id}`}
        className="inline-block mt-3 text-blue-600 font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default BusinessCard;
