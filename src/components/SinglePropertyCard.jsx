import React from 'react';
import { Link } from 'react-router';

const SinglePropertyCard = ({property}) => {
  
    return (
<div className="card bg-base-100  shadow-sm">
      <figure>
         <img
          className='w-full h-[200px] object-cover'
          src={property.image_link}
          alt="Shoes" />
      </figure>
      <div className="text-left p-4 space-y-4">
      <div className='flex gap-3'>
        <h2 className="font-bold text-xl">
      {property.property_name}</h2>
      {
        property.property_status ==='Sold'?<><div className="badge badge-warning">Sold</div></>:property.property_status ==='Rented'?<><div className="badge badge-secondary">Rented</div></>:<><div className="badge badge-success">Available</div></>

      } 
      
    </div>
       <p className='text-gray-500 text-sm font-medium'><span className='font-bold text-gray-600'>Posted By:</span>{property.posted_by}</p>
       <div className='flex justify-between items-center'>
        <p className='text-gray-500 text-sm font-medium'><span className='font-bold text-gray-600'>Price: </span>{property.property_price} <span>{property.property_type === 'Rent'?'BDT/month':'BDT'}</span></p>
        <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>category: </span>{property.category}</p>
       </div>
       <div className='flex justify-between items-center'>
        <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>Location:</span>{property.location}</p>
        <Link to={`/propertyDetails/${property._id}`} className='btn-primary py-2 px-4 rounded-lg shadow-2xl text-sm text-white font-bold'>See Details</Link>
       </div>
    </div>
    
     
</div>
  
    );
};

export default SinglePropertyCard;