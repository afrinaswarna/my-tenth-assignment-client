

import React from "react";
import { Link } from "react-router";

const SingleFeaturedRealEstateCard = ({ singleEstate }) => {
  const PINK_GRADIENT_BG =
    "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
  const PINK_ACCENT = "text-pink-600";

  return (
    <div className="card bg-base-100 border border-gray-200 rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-lg hover:border-pink-500">
      <figure className="relative">
        <img
          className="w-full h-[220px] object-cover"
          src={singleEstate.image_link}
          alt={`${singleEstate.property_name} image`}
        />

        

        <div className="absolute bottom-3 right-3 bg-white text-lg font-bold px-4 py-1 rounded-lg shadow-xl border-2 border-pink-500">
          <span className={PINK_ACCENT}>{singleEstate.property_price}</span>
          <span className="text-sm ml-1 font-medium text-gray-600">
            {singleEstate.category === "Rent" ? "BDT/month" : "BDT"}
          </span>
        </div>
      </figure>

      <div className="text-left p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h2 className={`font-extrabold text-xl ${PINK_ACCENT} line-clamp-1`}>
            {singleEstate.property_name}
          </h2>

          <p
            className={`text-xs font-semibold ${PINK_ACCENT} bg-pink-50 px-3 py-1 rounded-full`}
          >
            {singleEstate.category}
          </p>
        </div>

        <p className="flex items-center text-gray-500 text-sm font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 mr-1 ${PINK_ACCENT}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          {singleEstate.location}
        </p>

        <p className="text-gray-600 text-sm line-clamp-2">
          {singleEstate.short_description}
        </p>

        <hr className="my-3 border-pink-100" />

        <div className="flex justify-center pt-2">
          <Link
            to={`/propertyDetails/${singleEstate._id}`}
            className={`w-full text-center font-bold py-3 rounded-lg transition duration-300 ease-in-out shadow-lg ${PINK_GRADIENT_BG}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeaturedRealEstateCard;
