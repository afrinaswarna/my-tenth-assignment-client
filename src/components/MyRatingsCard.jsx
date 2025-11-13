

import React from 'react';
import { FaStar } from 'react-icons/fa'; 


const MyRatingsCard = ({ singleRatingData }) => {
    
  
    const { 
        reviewer_name, 
        property_name, 
        property_thumbnail, 
        star_rating, 
        review_text, 
        review_date 
    } = singleRatingData;

   
    const renderStars = (count) => {
        const rating = parseInt(count); 
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar 
                    key={i} 
                 
                    className={i <= rating ? "text-pink-500" : "text-gray-300"}
                />
            );
        }
        return <div className="flex text-lg">{stars}</div>;
    };

   
    let formattedDate = '';
    try {
        formattedDate = new Date(review_date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    } catch (e) {
      
        console.log(e)
        formattedDate = 'Date Unavailable'; 
    }

    return (
        <div className="card w-11/12 mt-5 mx-auto bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="card-body p-4 md:p-6">
                
              
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-600">
                        {reviewer_name}
                    </h3>
                    <p className="text-sm text-gray-500 font-medium">
                        {formattedDate}
                    </p>
                </div>

               
                <div className="mb-3">
                    {renderStars(star_rating)}
                </div>

                
                <div className="flex items-center gap-4 bg-pink-50/50 p-3 rounded-lg border border-pink-100 mb-4">
                    <div className="w-16 h-16 shrink-0">
                     
                        <img 
                            src={property_thumbnail} 
                            alt={`${property_name} thumbnail`} 
                            className="w-full h-full object-cover rounded-md shadow-md"
                        />
                    </div>
                    <div>
                     
                        <h4 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
                            {property_name}
                        </h4>
                        <p className="text-sm text-gray-600">Property Reviewed</p>
                    </div>
                </div>

              
                <p className="text-gray-700 italic border-l-4 border-pink-500 pl-4 py-1">
                    "{review_text}"
                </p>

            </div>
        </div>
    );
};

export default MyRatingsCard;