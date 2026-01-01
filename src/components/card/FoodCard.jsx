import Link from "next/link";
import CardButton from "../buttons/CardButton";

const FoodCard = ({ food }) => {
  //onAddToCart, onViewDetails
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Image */}
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{food.title}</h2>

        <p className="text-sm text-gray-500 mt-1">Category: {food.category}</p>

        <p className="text-xl font-bold text-green-600 mt-2">৳ {food.price}</p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <CardButton></CardButton>

          <Link
            href={`/foods/${food.id}`}
            // onClick={() => onViewDetails(food.id)}
            className="flex-1 border border-gray-300 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
