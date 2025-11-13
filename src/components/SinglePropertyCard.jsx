// import React from 'react';
// import { Link } from 'react-router';

// const SinglePropertyCard = ({property}) => {

//     return (
// <div className="card bg-base-100  shadow-sm">
//       <figure>
//          <img
//           className='w-full h-[200px] object-cover'
//           src={property.image_link}
//           alt="Shoes" />
//       </figure>
//       <div className="text-left p-4 space-y-4">
//       <div className='flex gap-3'>
//         <h2 className="font-bold text-xl">
//       {property.property_name}</h2>
//       {
//         property.property_status ==='Sold'?<><div className="badge badge-warning">Sold</div></>:property.property_status ==='Rented'?<><div className="badge badge-secondary">Rented</div></>:<><div className="badge badge-success">Available</div></>

//       }

//     </div>
//        <p className='text-gray-500 text-sm font-medium'><span className='font-bold text-gray-600'>Posted By:</span>{property.posted_by}</p>
//        <div className='flex justify-between items-center'>
//         <p className='text-gray-500 text-sm font-medium'><span className='font-bold text-gray-600'>Price: </span>{property.property_price} <span>{property.property_type === 'Rent'?'BDT/month':'BDT'}</span></p>
//         <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>category: </span>{property.category}</p>
//        </div>
//        <div className='flex justify-between items-center'>
//         <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>Location:</span>{property.location}</p>
//         <Link to={`/propertyDetails/${property._id}`} className='btn-primary py-2 px-4 text-white rounded-lg
//                   bg-linear-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#E05297]
//                   hover:from-[#E05297] hover:to-[#FF6B6B] transition duration-500 ease-in-out mt-6'>See Details</Link>
//        </div>
//     </div>

// </div>

//     );
// };

// export default SinglePropertyCard;

import React, { use } from "react";
import { Link } from "react-router";
import { FaLocationArrow } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";

const SinglePropertyCard = ({ property }) => {
  const {user} = use(AuthContext)
  const PINK_GRADIENT_BG =
    "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
  const PINK_ACCENT = "text-pink-600";

  return (
    <div className="card bg-base-100 border border-gray-200 rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-2xl hover:border-pink-500">
      <figure className="relative">
        <img
          className="w-full h-[220px] object-cover"
          src={property.image_link}
          alt={`${property.property_name} image`}
        />
      </figure>

      <div className="text-left p-5 space-y-3">
        <div className="flex justify-between items-start">
          <h2 className={`font-extrabold text-xl ${PINK_ACCENT} line-clamp-1`}>
            {property.property_name}
          </h2>
        </div>

        <p className="text-gray-500 text-sm font-medium">
          <span className="font-bold text-gray-700">Posted By:</span>{" "}
          {property.posted_by || user?.email}
        </p>

        <div className="flex justify-between items-center border-t border-b border-gray-100 py-2">
          <p className="text-lg font-bold">
            <span className={PINK_ACCENT}>{property.property_price}</span>
            <span className="text-sm text-gray-500 ml-1 font-medium">
              {property.category === "Rent" ? "BDT/month" : "BDT"}
            </span>
          </p>

          <p
            className={`text-xs font-semibold ${PINK_ACCENT} bg-pink-50 px-3 py-1 rounded-full`}
          >
            {property.category}
          </p>
        </div>

        <div className="flex justify-between items-center pt-3">
          <p className="flex items-center text-gray-600 text-sm font-medium">
            <FaLocationArrow className={`h-3 w-3 mr-1 ${PINK_ACCENT}`} />
            {property.location}
          </p>

          <Link
            to={`/propertyDetails/${property._id}`}
            className={`text-sm font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out shadow-lg ${PINK_GRADIENT_BG}`}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyCard;
