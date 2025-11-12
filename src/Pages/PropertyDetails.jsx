import React, { use, useState } from "react";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Rating from "react-rating";

const PropertyDetails = () => {
  const data = useLoaderData();
  const {setLoading} = use(AuthContext)
  const [rating, setRating] = useState(3);
  
  setLoading(false)
  console.log(data);

   
  return (
    <div className="bg-gray-100 pb-20">
      <div className="w-11/12 mx-auto py-10">
        {/* detail section */}
        <div>
          <div className="mb-10 space-y-2">
            {data.property_status === "Available" ? (
              <>
                <div className="badge badge-success">Available</div>
              </>
            ) : data.property_status === "Rented" ? (
              <>
                <div className="badge badge-secondary">Rented</div>
              </>
            ) : (
              <>
                <div className="badge badge-warning">Sold</div>
              </>
            )}
           
            <h2 className="text-4xl text-gray-700">{data.property_name}</h2>
            <p className="text-gray-500 text-sm flex items-center gap-2"><FaLocationArrow />{data.location}</p>
          </div>
        </div>
        <div>
            <img className="mx-auto w-full h-[300px] object-cover" src={data.image_link
} alt="" />
        </div>
        <div>
            <h2 className="mt-10 mb-8 font-bold text-2xl text-center">Property Details</h2>
            <div className="overflow-x-auto border-t border-gray-200 border-b ">
  <table className="table table-zebra">
   
   
    <tbody>
        <tr>
        <th>Property</th>
        <td>{data.property_name}</td>
        
      </tr>
        <tr>
        <th>Posted By</th>
        <td>{data.posted_by}</td>
        
      </tr>
      <tr>
        <th>Category</th>
        <td>{data.category}</td>
        
      </tr>
     
      <tr>
        <th>location</th>
        <td>{data.location}</td>
        
      </tr>
      <tr>
        <th>Description</th>
        <td>{data.short_description}</td>
        
      </tr>
      
      <tr>
        <th>Price</th>
        <td>{data.property_price} <span>{data.property_type === 'Rent'?'BDT/month':'BDT'}</span></td>
       
       
      </tr>
      
      <tr>
        <th>Posted Date</th>
        <td>{data.posted_date}</td>
       
      </tr>
    </tbody>
  </table>
</div>
        </div>
      </div>
      {/* review section */}
      <div>
        <h2 className="font-bold text-2xl text-center mb-10">Ratings and Reviews</h2>
       <div className="w-[500px] mx-auto  bg-white shadow-lg rounded-lg p-10">
         <form className="flex flex-col">
            <Rating
              style={{ maxWidth: 180 }}
               value={rating}
              onChange={setRating}
            />
          <textarea name="" id="" cols="20" rows="5" className="border p-2" placeholder="Write your review.."></textarea>
          <button className="btn-primary">Submit Review</button>
        </form>
         
       </div>

      </div>
    </div>
  );
};

export default PropertyDetails;
