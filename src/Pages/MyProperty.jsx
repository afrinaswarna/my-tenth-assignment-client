

// import React, { use, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { Link } from "react-router";
// import Swal from "sweetalert2";

// const MyProperty = () => {
//   const { user } = use(AuthContext);
//   const [myProperty, setMyProperty] = useState([]);
//   const updateModalRef = useRef(null)

//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:3000/properties?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setMyProperty(data);
//         });
//     }
//   }, [user?.email]);

// const handleDelete= (id) => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         }).then((result) => {
//             if (result.isConfirmed) {

//                 fetch(`http://localhost:3000/properties/${id}`, {
//                     method: 'DELETE'
//                 })
//                     .then(res => res.json())
//                     .then(data => {
//                         if (data.deletedCount) {
//                             Swal.fire({
//                                 title: "Deleted!",
//                                 text: "Your bid has been deleted.",
//                                 icon: "success"
//                             });

//                             // 
//                             const remainingProperties = myProperty.filter(property => property._id !== id);
//                             setMyProperty(remainingProperties)
//                         }
//                     })


//             }
//         });
//     }
//     const handleUpdateModal=()=>{
//           updateModalRef.current.showModal();

//     }

//     const handleUpdateSubmit = (e)=>{
//         e.preventDefault();

//     fetch(`http://localhost:3000/properties/${property._id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.modifiedCount > 0) {
//           Swal.fire("Success!", "Property updated successfully.", "success");
//           onUpdated(); // refresh list or details
//           onClose(); // close modal
//         } else {
//           Swal.fire("No changes made", "", "info");
//         }
//       })
//       .catch((err) => console.error(err));

//     }
//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-gray-800">
//         My Properties ({myProperty.length})
//       </h2>

//       {myProperty.length === 0 ? (
//         <p className="text-gray-600">You haven’t added any properties yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {myProperty.map((property) => (
//             <div
//               key={property._id}
//               className="bg-white rounded-xl shadow-md overflow-hidden"
//             >
//               <img
//                 src={property.image_link}
//                 alt={property.property_name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold text-gray-800 mb-1">
//                   {property.property_name}
//                 </h3>
//                 <p className="text-sm text-gray-500 mb-1">
//                   Category: {property.category}
//                 </p>
//                 <p className="text-sm text-gray-500 mb-1">
//                   Location: {property.location}
//                 </p>
//                 <p className="text-sm text-gray-700 mb-2 font-semibold">
//                   Price: ৳{property.property_price}
//                 </p>
//                 <p className="text-xs text-gray-400">
//                   Posted: {property.posted_date}
//                 </p>

//                 <div className="flex justify-between mt-4">
//                   <Link
//                     to={`/propertyDetails/${property._id}`}
//                     className="text-blue-600 font-semibold hover:underline"
//                   >
//                     View Details
//                   </Link>

//                   <div className="flex gap-2">
//                     <button
//                      onClick={handleUpdateModal}
//                       className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600"
//                     >
//                       Update
//                     </button>
//                     <button
//                       onClick={() => handleDelete(property._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                    <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
//                         <div className="modal-box">
//                             <h3 className="font-bold text-lg">Give the best offer!</h3>
//                             <p className="py-4">Offer something seller can not resist</p>
//                              <form onSubmit={handleUpdateSubmit} className="space-y-3">
//           <div>
//             <label className="block text-sm font-semibold">Property Name</label>
//             <input
//               type="text"
//               name="property_name"
//               value={formData.property_name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold">Description</label>
//             <textarea
//               name="short_description"
//               value={formData.short_description}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//             ></textarea>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold">Category</label>
//             <select
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//             >
//               <option>Rent</option>
//               <option>Sale</option>
//               <option>Commercial</option>
//               <option>Land</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-semibold">Price</label>
//             <input
//               type="number"
//               name="property_price"
//               value={formData.property_price}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold">Image Link</label>
//             <input
//               type="text"
//               name="image_link"
//               value={formData.image_link}
//               onChange={handleChange}
//               className="w-full border p-2 rounded-md"
//             />
//           </div>

//           {/* Read-only fields */}
//           <div>
//             <label className="block text-sm font-semibold">User Name</label>
//             <input
//               type="text"
//               value={property.posted_by}
//               readOnly
//               className="w-full border p-2 rounded-md bg-gray-100"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-semibold">User Email</label>
//             <input
//               type="text"
//               value={property.email}
//               readOnly
//               className="w-full border p-2 rounded-md bg-gray-100"
//             />
//           </div>

//           <div className="flex justify-end gap-3 mt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
//             >
//               Update
//             </button>
//           </div>
//         </form>

//                             <div className="modal-action">
//                                 <form method="dialog">
//                                     {/* if there is a button in form, it will close the modal */}
//                                     <button className="btn">Cancel</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </dialog>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyProperty;
import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router"; // Use 'react-router-dom' for <Link> in modern React apps
import Swal from "sweetalert2";

const MyProperty = () => {
  // 1. Get user from AuthContext
  const { user } = use(AuthContext);
  
  // 2. State to store the user's properties
  const [myProperty, setMyProperty] = useState([]);
  
  // 3. State to hold the data of the property currently being edited (Crucial for the form)
  const [formData, setFormData] = useState({});
  
  // 4. Ref for the Update Modal (using <dialog> requires a ref)
  const updateModalRef = useRef(null);
  const navigate = useNavigate()

  // --- Data Fetching Effect ---
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/properties?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyProperty(data);
        })
        .catch((error) => console.error("Error fetching properties:", error));
    }
  }, [user?.email]);

  // --- Helper function to re-fetch/refresh properties (used after update/delete) ---
//   const refreshProperties = () => {
//     if (user?.email) {
//       fetch(`http://localhost:3000/properties?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setMyProperty(data);
//         })
//         .catch((error) => console.error("Error fetching properties:", error));
//     }
//   };

  // --- Form Change Handler ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "property_price" ? Number(value) : value, // Convert price to number
    }));
  };

  // --- Delete Handler ---
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/properties/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // Your backend should return `{ deletedCount: 1 }` or similar for success
            if (data.deletedCount > 0 || data.deletedCount === undefined) { 
              Swal.fire({
                title: "Deleted!",
                text: "Your property has been deleted.",
                icon: "success",
              });

              // Update the state directly without a full re-fetch for better performance
              const remainingProperties = myProperty.filter((property) => property._id !== id);
              setMyProperty(remainingProperties);
            }
          })
          .catch((error) => {
            console.error("Delete failed:", error);
            Swal.fire("Error!", "Failed to delete property.", "error");
          });
      }
    });
  };

  // --- Update Modal Handlers ---
  
  // Opens the modal and pre-fills the form with the selected property's data
  const handleUpdateModal = (property) => {
    setFormData(property); // Set the entire property object to formData
    updateModalRef.current.showModal();
  };

  // Closes the modal
  const handleCloseModal = () => {
    updateModalRef.current.close();
    setFormData({}); // Clear form data on close
  };

  // --- Update Submit Handler ---
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    
    const idToUpdate = formData._id; // Get ID from the formData state

    fetch(`http://localhost:3000/properties/${idToUpdate}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // Your backend returns an object with modifiedCount
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Property updated successfully.", "success");
          
          // Update the property list in state with the new data
          setMyProperty(prevProperties => prevProperties.map(p => 
            p._id === idToUpdate ? {...p, ...formData} : p
          ));
          navigate(`/propertyDetails/${idToUpdate}`)

          handleCloseModal(); // Close the modal
        } else if (data.modifiedCount === 0) {
          Swal.fire("No changes made", "The data you submitted was the same as the existing data.", "info");
          handleCloseModal(); // Still close the modal
        } else {
            Swal.fire("Update Failed", "Could not update the property.", "error");
        }
      })
      .catch((err) => {
        console.error("Update error:", err);
        Swal.fire("Error!", "An error occurred during update.", "error");
      });
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        My Properties ({myProperty.length})
      </h2>

      {/* --- Property List Display --- */}
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
                  {/* NOTE: Changed <Link> import to 'react-router-dom' convention */}
                  <Link
                    to={`/propertyDetails/${property._id}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    View Details
                  </Link>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleUpdateModal(property)} // Pass the property object here
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md text-sm hover:bg-yellow-600"
                    >
                      Update
                    </button>
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

      {/* --- Update Modal (Separate from map for clarity) --- */}
      {/* We only render the modal once outside the map */}
      <dialog ref={updateModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Property Details</h3>
          <p className="py-4">Modify the fields you wish to update.</p>
          
          {/* Check if formData is populated before rendering the form */}
          {formData._id && (
            <form onSubmit={handleUpdateSubmit} className="space-y-3">
              {/* Form fields populated by formData state */}
              <div>
                <label className="block text-sm font-semibold">Property Name</label>
                <input
                  type="text"
                  name="property_name"
                  value={formData.property_name || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Description</label>
                <textarea
                  name="short_description"
                  value={formData.short_description || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold">Category</label>
                <select
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                >
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold">Price</label>
                <input
                  type="number"
                  name="property_price"
                  value={formData.property_price || 0}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold">Image Link</label>
                <input
                  type="text"
                  name="image_link"
                  value={formData.image_link || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md"
                />
              </div>

              {/* Read-only fields (from the original property data, not formData) */}
              <div>
                <label className="block text-sm font-semibold">User Name</label>
                <input
                  type="text"
                  value={formData.posted_by || ""} // Use formData's existing values
                  readOnly
                  className="w-full border p-2 rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold">User Email</label>
                <input
                  type="text"
                  value={formData.email || ""} // Use formData's existing values
                  readOnly
                  className="w-full border p-2 rounded-md bg-gray-100"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Update Property
                </button>
              </div>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
              {/* This button provides a standard way to close the dialog */}
              <button className="btn" onClick={handleCloseModal}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProperty;