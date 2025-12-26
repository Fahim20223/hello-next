import React from "react";
import Link from "next/link";

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">
          Food Not Found 🍽️
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-block mb-6 text-sm text-gray-600 hover:text-black"
      >
        ← Back to Foods
      </Link>

      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-xl shadow-md p-6">
        {/* Image */}
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <img
            src={food.foodImg}
            alt={food.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{food.title}</h1>

          <p className="text-gray-500 mt-2">
            Category: <span className="font-medium">{food.category}</span>
          </p>

          <p className="text-gray-500">
            Area: <span className="font-medium">{food.area}</span>
          </p>

          <p className="text-2xl font-bold text-green-600 mt-4">
            ৳ {food.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition">
              Add to Cart
            </button>

            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 text-center py-3 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
