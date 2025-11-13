import React from 'react';
import FeaturedRealEstates from '../components/FeaturedRealEstates';
import WhyChooseUs from '../components/WhyChooseUs';
import ExpertAgents from '../components/ExpertAgents';
import Testimonials from '../components/Testimonials';


const featuredRealEstatePromise = fetch('http://localhost:3000/latest-properties')
.then(res=>res.json())
const Home = () => {
    return (
        <div className='w-11/12 mx-auto py-20'>
          <FeaturedRealEstates featuredRealEstatePromise={featuredRealEstatePromise}></FeaturedRealEstates>

          <WhyChooseUs></WhyChooseUs>

          {/* two extra section */}
          <ExpertAgents></ExpertAgents>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;