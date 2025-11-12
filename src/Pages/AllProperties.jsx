import React, { useState } from "react";
import AllPropertiesCard from "../components/AllPropertiesCard";

const allPropertiesPromise = fetch("http://localhost:3000/properties").then(
  (res) => res.json()
);
const AllProperties = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="text-center my-20 space-y-4">
      <h2 className="font-bold text-2xl ">Our Properties Collection</h2>
      <p className="text-sm text-gray-400">
        Choose your favoruate one or add your own property
      </p>
      <div className="join mb-10">
        <div>
          <label className="input validator join-item">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
            type="search" required placeholder="Search properties" />
          </label>
        </div>
        <button className="btn bg-[#4A89F7] join-item">Join</button>
      </div>
      <AllPropertiesCard
        allPropertiesPromise={allPropertiesPromise}
        search={search}
        setSearch={setSearch}
      ></AllPropertiesCard>
    </div>
  );
};

export default AllProperties;
