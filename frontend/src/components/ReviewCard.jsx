import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800">
          {review.user?.name || "Anonymous"}
        </span>
        <span className="text-yellow-500 font-medium">
          ⭐ {review.rating}
        </span>
      </div>

      <p className="text-gray-700 text-sm leading-relaxed">
        {review.comment}
      </p>
    </div>
  );
};

export default ReviewCard;
