"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 p-10 rounded">
      <h4 className="text-4xl font-bold">Welcome to Dev-Story</h4>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-sky-500 rounded cursor-pointer hover:bg-black hover:text-white"
      >
        Share-Story
      </button>
    </div>
  );
};

export default Banner;
