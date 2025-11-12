import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { useLoaderData } from "react-router";

const PropertyDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-gray-100">
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
      <div></div>
    </div>
  );
};

export default PropertyDetails;
