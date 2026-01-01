"use client";
import React, { useState } from "react";

const CardButton = () => {
  const [inCart, setInCart] = useState(false);

  const handleAdd2Cart = () => {
    setInCart(true);
  };
  return (
    <button
      onClick={handleAdd2Cart}
      disabled={inCart}
      // onClick={() => onAddToCart(food)}
      className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition disabled:bg-gray-100 disabled:text-gray-400"
    >
      {inCart ? "Added" : " Add to Cart"}
    </button>
  );
};

export default CardButton;
