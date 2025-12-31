"use client";
import ReviewCard from "@/components/card/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

//reviewPage
const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div>
      <h1>Total {reviews.length} Reviews</h1>
      <div className="grid my-5 grid-cols-3 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
