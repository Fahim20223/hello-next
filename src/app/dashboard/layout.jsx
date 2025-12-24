import React from "react";
import dashboard from "./page";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <h2>Navigation</h2>
        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded text-white"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded text-white"
            href={"/dashboard/my-profile"}
          >
            Add Profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-600 rounded text-white"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
