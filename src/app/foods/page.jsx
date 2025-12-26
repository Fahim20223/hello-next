import FoodCard from "@/components/card/FoodCard";
import React from "react";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random"
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div className="max-w-7xl mx-auto">
      <h1>Total {foods.length} Found</h1>
      <div className="grid my-5 grid-cols-3 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
