import React from 'react';
import { Link } from 'react-router';

const SingleFeaturedRealEstateCard = ({singleEstate}) => {
    console.log(singleEstate)
    return (
        <div className="card bg-base-100  shadow-sm">
      <figure>
         <img
          className='w-full h-[200px] object-cover'
          src={singleEstate.image_link}
          alt="Shoes" />
      </figure>
      <div className="text-left p-4 space-y-4">
      <div className='flex gap-3'>
        <h2 className="font-bold text-xl">
      {singleEstate.property_name}</h2>
      {
        singleEstate.property_status ==='Available'?<><div className="badge badge-success">Available</div></>:singleEstate.property_status ==='Rented'?<><div className="badge badge-secondary">Rented</div></>:<><div className="badge badge-warning">Sold</div></>

      } 
      
    </div>
       <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>Description:</span>{singleEstate.short_description}</p>
       <div className='flex justify-between items-center'>
        <p className='text-gray-500 text-sm font-medium'><span className='font-bold text-gray-600'>Price: </span>{singleEstate.property_price} <span>{singleEstate.property_type === 'Rent'?'BDT/month':'BDT'}</span></p>
        <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>category: </span>{singleEstate.category}</p>
       </div>
       <div className='flex justify-between items-center'>
        <p className='text-gray-500 text-sm font-medium'> <span className='font-bold text-gray-600'>Location:</span>{singleEstate.location}</p>
        <Link to={`/propertyDetails/${singleEstate._id}`} className='btn-primary py-2 px-4 rounded-lg shadow-2xl text-sm text-white font-bold'>View Details</Link>
       </div>
    </div>
    
     
</div>
    );
};

export default SingleFeaturedRealEstateCard;