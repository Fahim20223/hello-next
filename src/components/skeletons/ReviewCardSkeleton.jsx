const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 space-y-4 animate-pulse">
      {/* User */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-300 rounded" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="w-4 h-4 bg-gray-300 rounded" />
        ))}
      </div>

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-3 bg-gray-300 rounded w-full" />
        <div className="h-3 bg-gray-300 rounded w-11/12" />
        <div className="h-3 bg-gray-300 rounded w-10/12" />
      </div>

      {/* Button */}
      <div className="h-8 w-24 bg-gray-300 rounded-full" />
    </div>
  );
};

export default ReviewCardSkeleton;
