// import React, { useState } from "react";
// import AllPropertiesCard from "../components/AllPropertiesCard";

// const allPropertiesPromise = fetch("http://localhost:3000/properties").then(
//   (res) => res.json()
// );
// const AllProperties = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <div className="text-center my-20 space-y-4">
//       <h2 className="font-bold text-2xl ">Our Properties Collection</h2>
//       <p className="text-sm text-gray-400">
//         Choose your favoruate one or add your own property
//       </p>
//       <div className="join mb-10">
//         <div>
//           <label className="input validator join-item">
//             <svg
//               className="h-[1em] opacity-50"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//             >
//               <g
//                 strokeLinejoin="round"
//                 strokeLinecap="round"
//                 strokeWidth="2.5"
//                 fill="none"
//                 stroke="currentColor"
//               >
//                 <circle cx="11" cy="11" r="8"></circle>
//                 <path d="m21 21-4.3-4.3"></path>
//               </g>
//             </svg>
//             <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)} 
//             type="search" required placeholder="Search properties" />
//           </label>
//         </div>
//         <button className="btn bg-[#4A89F7] join-item">Join</button>
//       </div>
//       <AllPropertiesCard
//         allPropertiesPromise={allPropertiesPromise}
//         search={search}
//         setSearch={setSearch}
//       ></AllPropertiesCard>
//     </div>
//   );
// };

// export default AllProperties;
import React, { useState } from "react";
import AllPropertiesCard from "../components/AllPropertiesCard";
import { FaSearch } from "react-icons/fa"; // Using react-icons for a cleaner look

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