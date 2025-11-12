import React from 'react';
import FeaturedRealEstates from '../components/FeaturedRealEstates';


const featuredRealEstatePromise = fetch('http://localhost:3000/latest-properties')
.then(res=>res.json())
const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
          <FeaturedRealEstates featuredRealEstatePromise={featuredRealEstatePromise}></FeaturedRealEstates>
        </div>
    );
};

export default Home;