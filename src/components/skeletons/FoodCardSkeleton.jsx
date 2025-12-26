const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-300" />

      {/* Content Skeleton */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4" />
        <div className="h-3 bg-gray-200 rounded w-1/2" />
        <div className="h-5 bg-gray-300 rounded w-1/3" />

        {/* Buttons Skeleton */}
        <div className="flex gap-3 mt-4">
          <div className="h-9 bg-gray-300 rounded-lg flex-1" />
          <div className="h-9 bg-gray-200 rounded-lg flex-1" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
