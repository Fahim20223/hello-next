"use client";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likes.length);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800">{review.user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>{i < review.rating ? "★" : "☆"}</span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-sm leading-relaxed">{review.review}</p>

      {/* Actions */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={handleLike}
          className={`px-4 py-1 rounded-full text-sm font-medium transition
            ${
              liked
                ? "bg-red-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
        >
          ❤️ Like
        </button>

        <span className="text-sm text-gray-500">{likeCount} likes</span>
      </div>
    </div>
  );
};

export default ReviewCard;
