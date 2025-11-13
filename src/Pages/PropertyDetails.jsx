// // import React, { use, useState } from "react";
// // import { FaLocationArrow, FaStar } from "react-icons/fa";
// // import { useLoaderData } from "react-router";
// // import { AuthContext } from "../context/AuthContext";
// // import Rating from "react-rating";

// // const PropertyDetails = () => {
// //   const data = useLoaderData();
// //   const {setLoading} = use(AuthContext)
// //   const [rating, setRating] = useState(3);
  
// //   setLoading(false)
// //   // console.log(data);

   
// //   return (
// //     <div className="bg-gray-100 pb-20">
// //       <div className="w-11/12 mx-auto py-10">
       
// //         <div>
// //           <div className="mb-10 space-y-2">
// //             {data.property_status === "Available" ? (
// //               <>
// //                 <div className="badge badge-success">Available</div>
// //               </>
// //             ) : data.property_status === "Rented" ? (
// //               <>
// //                 <div className="badge badge-secondary">Rented</div>
// //               </>
// //             ) : (
// //               <>
// //                 <div className="badge badge-warning">Sold</div>
// //               </>
// //             )}
           
// //             <h2 className="text-4xl text-gray-700">{data.property_name}</h2>
// //             <p className="text-gray-500 text-sm flex items-center gap-2"><FaLocationArrow />{data.location}</p>
// //           </div>
// //         </div>
// //         <div>
// //             <img className="mx-auto w-full h-[300px] object-cover" src={data.image_link
// // } alt="" />
// //         </div>
// //         <div>
// //             <h2 className="mt-10 mb-8 font-bold text-2xl text-center">Property Details</h2>
// //             <div className="overflow-x-auto border-t border-gray-200 border-b ">
// //   <table className="table table-zebra">
   
   
// //     <tbody>
// //         <tr>
// //         <th>Property</th>
// //         <td>{data.property_name}</td>
        
// //       </tr>
// //         <tr>
// //         <th>Posted By</th>
// //         <td>{data.posted_by}</td>
        
// //       </tr>
// //       <tr>
// //         <th>Category</th>
// //         <td>{data.category}</td>
        
// //       </tr>
     
// //       <tr>
// //         <th>location</th>
// //         <td>{data.location}</td>
        
// //       </tr>
// //       <tr>
// //         <th>Description</th>
// //         <td>{data.short_description}</td>
        
// //       </tr>
      
// //       <tr>
// //         <th>Price</th>
// //         <td>{data.property_price} <span>{data.property_type === 'Rent'?'BDT/month':'BDT'}</span></td>
       
       
// //       </tr>
      
// //       <tr>
// //         <th>Posted Date</th>
// //         <td>{data.posted_date}</td>
       
// //       </tr>
// //     </tbody>
// //   </table>
// // </div>
// //         </div>
// //       </div>
// //       {/* review section */}
// //       <div>
// //         <h2 className="font-bold text-2xl text-center mb-10">Ratings and Reviews</h2>
// //        <div className="w-[500px] mx-auto  bg-white shadow-lg rounded-lg p-10">
// //          <form className="flex flex-col">
// //             <Rating
// //               style={{ maxWidth: 180 }}
// //                value={rating}
// //               onChange={setRating}
// //             />
// //           <textarea name="" id="" cols="20" rows="5" className="border p-2" placeholder="Write your review.."></textarea>
// //           <button className="btn-primary">Submit Review</button>
// //         </form>
         
// //        </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default PropertyDetails;
// import React, { use, useState } from "react";
// import { FaLocationArrow, FaStar } from "react-icons/fa";
// import { useLoaderData } from "react-router";
// import { AuthContext } from "../context/AuthContext";
// // Assuming the Rating component needs imports for full/empty stars for theming
// import Rating from "react-rating"; 

// const PropertyDetails = () => {
//     const data = useLoaderData();
//     const { setLoading } = use(AuthContext);
//     const [rating, setRating] = useState(3);
    
//     setLoading(false);

//     // Theme Constants from your Navbar for consistency
//     const PINK_GRADIENT_BG = "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
//     const PINK_ACCENT = "text-pink-600";

//     const getStatusBadge = (status) => {
//         let badgeClass = "";
//         let text = status;
        
//         if (status === "Available") {
//             badgeClass = "bg-green-500"; // Using standard green for positive status
//         } else if (status === "Rented") {
//             badgeClass = "bg-yellow-500"; // Yellow/secondary for caution
//         } else if (status === "Sold") {
//             badgeClass = "bg-red-500"; // Red for completed/sold status
//         } else {
//             badgeClass = "bg-gray-500";
//         }

//         return (
//             <div className={`text-white font-semibold text-sm px-4 py-1 rounded-full shadow-md inline-block ${badgeClass}`}>
//                 {text}
//             </div>
//         );
//     };

//     const EmptyStar = <FaStar className="text-gray-300" />;
//     const FullStar = <FaStar className={PINK_ACCENT} />;

//     return (
//         <div className="bg-gray-50 pb-20">
//             <div className="w-11/12 mx-auto py-12">
                
//                 {/* Header Section */}
//                 <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-t-4 border-pink-500">
//                     <div className="flex justify-between items-start mb-3">
//                         {getStatusBadge(data.property_status)}
//                     </div>
                    
//                     <h2 className="text-5xl font-extrabold text-gray-800 mb-2">{data.property_name}</h2>
//                     <p className="text-gray-500 text-base flex items-center gap-2 font-medium">
//                         <FaLocationArrow className={PINK_ACCENT} />
//                         {data.location}
//                     </p>
//                 </div>
                
//                 {/* Image & Main Content */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
//                     {/* Image and Description Column (Left/Wide) */}
//                     <div className="lg:col-span-2 space-y-8">
                        
//                         {/* Image */}
//                         <div className="relative overflow-hidden rounded-xl shadow-lg">
//                             <img 
//                                 className="w-full h-[450px] object-cover transition duration-300 ease-in-out hover:scale-105" 
//                                 src={data.image_link} 
//                                 alt={data.property_name} 
//                             />
//                             {/* Price Badge over image */}
//                             <div className={`absolute bottom-5 right-5 ${PINK_GRADIENT_BG} text-white text-2xl font-bold px-6 py-3 rounded-xl shadow-xl`}>
//                                 {data.property_price}
//                                 <span className='text-lg ml-1 font-medium'>
//                                     {data.property_type === 'Rent' ? ' BDT/month' : ' BDT'}
//                                 </span>
//                             </div>
//                         </div>

//                         {/* Property Description */}
//                         <div className="bg-white p-8 rounded-lg shadow-md">
//                             <h3 className="font-bold text-2xl mb-4 text-gray-800 border-b pb-2 border-pink-100">
//                                 Property Overview
//                             </h3>
//                             <p className="text-gray-600 leading-relaxed">
//                                 {data.short_description}
//                             </p>
//                         </div>
//                     </div>
                    
//                     {/* Details Table & Contact Column (Right/Narrow) */}
//                     <div className="lg:col-span-1 space-y-8">
                        
//                         {/* Details Table */}
//                         <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
//                             <h3 className="font-bold text-xl mb-4 text-gray-800">Key Information</h3>
//                             <table className="table-auto w-full text-left">
//                                 <tbody>
//                                     <tr className="border-b border-gray-100">
//                                         <th className="py-2 font-semibold text-gray-700">Type</th>
//                                         <td className="py-2 text-gray-600">{data.property_type}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-100">
//                                         <th className="py-2 font-semibold text-gray-700">Category</th>
//                                         <td className="py-2 text-gray-600">{data.category}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-100">
//                                         <th className="py-2 font-semibold text-gray-700">Posted By</th>
//                                         <td className="py-2 text-gray-600">{data.posted_by}</td>
//                                     </tr>
//                                     <tr className="border-b border-gray-100">
//                                         <th className="py-2 font-semibold text-gray-700">Posted Date</th>
//                                         <td className="py-2 text-gray-600">{data.posted_date}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
                        
//                         {/* Placeholder for Agent/Contact Info (You might add this later) */}
//                         <div className="bg-pink-50 p-6 rounded-lg shadow-inner text-center">
//                             <h4 className="font-bold text-xl mb-3 text-pink-700">Interested in this Property?</h4>
//                             <button className={`w-full py-3 rounded-lg font-bold text-white transition duration-300 ${PINK_GRADIENT_BG}`}>
//                                 Contact Agent
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 <hr className="my-12 border-pink-200" />

//                 {/* Review Section */}
//                 <div className="mt-12">
//                     <h2 className="font

import React, { use, useState } from "react";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";
// Assuming the Rating component needs imports for full/empty stars for theming
import Rating from "react-rating"; 

const PropertyDetails = () => {
    const data = useLoaderData();
    const { user,setLoading } = use(AuthContext);
    const [rating, setRating] = useState(3);
    
    setLoading(false);

   
    const PINK_GRADIENT_BG = "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
    const PINK_ACCENT = "text-pink-600";

   
    const EmptyStar = <FaStar className="text-gray-300" />;
    const FullStar = <FaStar className={PINK_ACCENT} />;

    return (
        <div className="bg-gray-50 pb-20">
            <div className="w-11/12 mx-auto py-12">
                
              
                <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-t-4 border-pink-500">
                   
                    
                    <h2 className="text-5xl font-extrabold text-gray-800 mb-2">{data.property_name}</h2>
                    <p className="text-gray-500 text-base flex items-center gap-2 font-medium">
                        <FaLocationArrow className={PINK_ACCENT} />
                        {data.location}
                    </p>
                </div>
                

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    
                    <div className="lg:col-span-2 space-y-8">
                        
                       
                        <div className="relative overflow-hidden rounded-xl shadow-lg">
                            <img 
                                className="w-full h-[450px] object-cover transition duration-300 ease-in-out hover:scale-105" 
                                src={data.image_link} 
                                alt={data.property_name} 
                            />
                            
                            <div className={`absolute bottom-5 right-5 ${PINK_GRADIENT_BG} text-white text-2xl font-bold px-6 py-3 rounded-xl shadow-xl`}>
                                {data.property_price}
                                <span className='text-lg ml-1 font-medium'>
                                    {data.category === 'Rent' ? ' BDT/month' : ' BDT'}
                                </span>
                            </div>
                        </div>

                        {/* Property Description */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="font-bold text-2xl mb-4 text-gray-800 border-b pb-2 border-pink-100">
                                Property Overview
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {data.short_description}
                            </p>
                        </div>
                    </div>
                    
                   
                    <div className="lg:col-span-1 space-y-8">
                        
                        
                        <div className="bg-white p-6 rounded-lg shadow-md border border-pink-100">
                            <h3 className="font-bold text-xl mb-4 text-gray-800">Key Information</h3>
                            <table className="table-auto w-full text-left">
                                <tbody>
                                    
                                    <tr className="border-b border-gray-100">
                                        <th className="py-2 font-semibold text-gray-700">Category</th>
                                        <td className="py-2 text-gray-600">{data.category}</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-2 font-semibold text-gray-700">Posted By</th>
                                        <td className="py-2 text-gray-600">{data.posted_by||user?.email}</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <th className="py-2 font-semibold text-gray-700">Posted Date</th>
                                        <td className="py-2 text-gray-600">{data.posted_date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                       
                        <div className="bg-pink-50 p-6 rounded-lg shadow-inner text-center">
                            <h4 className="font-bold text-xl mb-3 text-pink-700">Interested in this Property?</h4>
                            <button className={`w-full py-3 rounded-lg font-bold text-white transition duration-300 ${PINK_GRADIENT_BG}`}>
                                Contact Agent
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="my-12 border-pink-200" />

                {/* Review Section */}
                <div className="mt-12">
                    <h2 className="font-bold text-3xl text-center mb-10 text-gray-800">Ratings and Reviews</h2>
                    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-10 border-t-4 border-pink-500">
                        <h3 className="text-xl font-semibold mb-5 text-gray-700">Leave a Review</h3>
                        <form className="flex flex-col space-y-4">
                            
                            {/* Rating Component */}
                            <div className="flex items-center space-x-3">
                                <span className="font-medium text-gray-700">Your Rating:</span>
                                <Rating
                                    initialRating={rating}
                                    emptySymbol={EmptyStar}
                                    fullSymbol={FullStar}
                                    onChange={setRating}
                                    className="text-2xl" // Apply Tailwind size to the icon container
                                />
                            </div>

                            {/* Textarea */}
                            <textarea 
                                name="review" 
                                rows="5" 
                                className="border border-gray-300 p-4 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200 resize-none" 
                                placeholder="Share your honest opinion about this property..."
                            ></textarea>
                            
                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className={`py-3 rounded-lg font-bold text-white shadow-md transition duration-300 ${PINK_GRADIENT_BG}`}
                            >
                                Submit Review
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;