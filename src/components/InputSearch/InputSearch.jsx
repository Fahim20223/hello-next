"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  //   console.log(params.toString());
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.search.value;

    //new search parameters
    const newParams = new URLSearchParams(params.toString());

    //set query
    newParams.set("search", value);

    router.push(`?${newParams.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="px-1 py-3 border-2 rounded-lg w-2xl"
          type="text"
          placeholder="Enter Food name"
          name="search"
          id=""
        />
        <button className="cursor-pointer btn px-4 py-2 bg-yellow-500 text-black rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
