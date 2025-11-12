import React, { use } from 'react';
import SingleRealEstateCard from './SingleFeaturedRealEstateCard';

const FeaturedRealEstates = ({featuredRealEstatePromise}) => {
    const realEstates = use(featuredRealEstatePromise)
    // console.log(realEstates)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                realEstates.map(singleEstate =>
                <SingleRealEstateCard 
                singleEstate={singleEstate}>    
                 </SingleRealEstateCard>)
            }
        </div>
    );
};

export default FeaturedRealEstates;