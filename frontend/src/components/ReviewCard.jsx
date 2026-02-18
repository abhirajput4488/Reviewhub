import React from "react";
const ReviewCard = ({ review }) => {
  return (
    <div className="border rounded-md p-3 mb-3 bg-gray-50">
      <div className="flex justify-between mb-1">
        <span className="font-semibold">Rating: {review.rating} ⭐</span>
      </div>
      <p className="text-gray-700">{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
