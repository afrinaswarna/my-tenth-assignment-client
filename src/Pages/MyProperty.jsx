// import React, { use, useEffect, useState } from 'react';
// import { AuthContext } from '../context/AuthContext';

// const MyProperty = () => {
//     const {user} = use(AuthContext)
//     const [myProperty,setMyProperty]=useState([])
//     useEffect(() => {
//          console.log("Fetching for email:", user?.email);
//         if (user?.email) {
//           fetch(`http://localhost:3000/properties?email=${user.email}`)

//                    .then(res => res.json())
//       .then(data => {
//         console.log("Fetched data:", data);
//         setMyProperty(data);
//       })
//       .catch(err => console.error("Fetch error:", err));
//   }

//     }, [user?.email])
//     console.log(myProperty)

//     return (
//         <div>

//         </div>
//     );
// };

// export default MyProperty;

import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyProperty = () => {
  const { user } = use(AuthContext);
  const [myProperty, setMyProperty] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/properties?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyProperty(data);
        });
    }
  }, [user?.email]);

  // 🔹 Delete Property
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This property will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:3000/properties/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Property has been deleted.", "success");
//               setMyProperty(myProperty.filter((p) => p._id !== id));
//             }
//           });
//       }
//     });
//   };
const handleDelete= (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/properties/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your bid has been deleted.",
                                icon: "success"
                            });

                            // 
                            const remainingProperties = myProperty.filter(property => property._id !== id);
                            setMyProperty(remainingProperties)
                        }
                    })


            }
        });
    }
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        My Properties ({myProperty.length})
      </h2>

      {myProperty.length === 0 ? (
        <p className="text-gray-600">You haven’t added any properties yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myProperty.map((property) => (
            <div
              key={property._id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={property.image_link}
                alt={property.property_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">
                  {property.property_name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  Category: {property.category}
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  Location: {property.location}
                </p>
                <p className="text-sm text-gray-700 mb-2 font-semibold">
                  Price: ৳{property.property_price}
                </p>
                <p className="text-xs text-gray-400">
                  Posted: {property.posted_date}
                </p>

                <div className="flex justify-between mt-4">
                  <Link
                    to={`/propertyDetails/${property._id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View Details
                  </Link>

                  <div className="flex gap-2">
                    <Link
                      to={`/update-property/${property._id}`}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(property._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProperty;
