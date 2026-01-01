"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CardButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);

  const { addToCart } = use(CartContext);

  const handleAdd2Cart = () => {
    addToCart(food);
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
