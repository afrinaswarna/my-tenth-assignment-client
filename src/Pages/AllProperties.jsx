

import React, { useState } from "react";
import AllPropertiesCard from "../components/AllPropertiesCard";
import { FaSearch } from "react-icons/fa"; 

const allPropertiesPromise = fetch("http://localhost:3000/properties").then(
    (res) => res.json()
);

const AllProperties = () => {
    const [search, setSearch] = useState("");

    
    const PINK_GRADIENT_BG = "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
    const PINK_ACCENT = "text-pink-600";
    
    return (
        <div className="text-center my-20 space-y-6 w-11/12 mx-auto">
            
          
            <h2 className="font-extrabold text-4xl text-gray-700">
                Our Exclusive Property Collection
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
                Explore a curated list of properties. Use the search bar to find your next perfect home.
            </p>

          
            <div className="flex justify-center mb-16 pt-4">
                <div className="flex shadow-lg rounded-xl overflow-hidden border border-pink-200">
                    
                   
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search properties by property name.."
                        className="py-3 px-6 text-gray-700 w-80 sm:w-96 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                        required
                    />
                    
                    
                    <button 
                        className={`font-semibold py-3 px-6 transition duration-300 ${PINK_GRADIENT_BG} flex items-center gap-2`}
                    >
                        <FaSearch className="w-4 h-4" />
                        Search
                    </button>
                </div>
            </div>
            
            <AllPropertiesCard
                allPropertiesPromise={allPropertiesPromise}
                search={search}
                setSearch={setSearch}
            ></AllPropertiesCard>
        </div>
    );
};

export default AllProperties;