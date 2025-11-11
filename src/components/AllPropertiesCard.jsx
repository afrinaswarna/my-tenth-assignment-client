import React, { use } from "react";
import SinglePropertyCard from "./SinglePropertyCard";

const AllPropertiesCard = ({ allPropertiesPromise }) => {
  const allProperties = use(allPropertiesPromise);
  console.log(allProperties);
  return (
    <div>
      {/* <div>
        <h2>Total({allProperties.length})Properties found</h2>
        <label className="input">
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
          <input type="search" required placeholder="Search" />
        </label>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allProperties.map((property) => (
          <SinglePropertyCard property={property}></SinglePropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllPropertiesCard;
