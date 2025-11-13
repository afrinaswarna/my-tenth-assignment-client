
import React, { use, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router"; 
import Swal from "sweetalert2";

const MyProperty = () => {
 
  const { user } = use(AuthContext);

  
  const [myProperty, setMyProperty] = useState([]);

 
  const [formData, setFormData] = useState({});

 
  const updateModalRef = useRef(null);
  const navigate = useNavigate();

 
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

  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "property_price" ? Number(value) : value, // Convert price to number
    }));
  };

 
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
           
            if (data.deletedCount > 0 || data.deletedCount === undefined) {
              Swal.fire({
                title: "Deleted!",
                text: "Your property has been deleted.",
                icon: "success",
              });

             
              const remainingProperties = myProperty.filter(
                (property) => property._id !== id
              );
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

  
  const handleUpdateModal = (property) => {
    setFormData(property); 
    updateModalRef.current.showModal();
  };

 
  const handleCloseModal = () => {
    updateModalRef.current.close();
    setFormData({});
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const idToUpdate = formData._id;

    fetch(`http://localhost:3000/properties/${idToUpdate}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
      
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Property updated successfully.", "success");

         
          setMyProperty((prevProperties) =>
            prevProperties.map((p) =>
              p._id === idToUpdate ? { ...p, ...formData } : p
            )
          );
          navigate(`/propertyDetails/${idToUpdate}`);

          handleCloseModal(); 
        } else if (data.modifiedCount === 0) {
          Swal.fire(
            "No changes made",
            "The data you submitted was the same as the existing data.",
            "info"
          );
          handleCloseModal();
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
    <div className="p-8  min-h-screen">
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
                    <button
                      onClick={() => handleUpdateModal(property)} 
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

     
      <dialog
        ref={updateModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg text-[#E05297]">
            Update Property Details 🏠
          </h3>

          <p className="py-4 text-gray-600">
            Modify the fields you wish to update.
          </p>

          {formData._id && (
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Property Name
                </label>

                <input
                  type="text"
                  name="property_name"
                  value={formData.property_name || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50 transition duration-150"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Description
                </label>

                <textarea
                  name="short_description"
                  value={formData.short_description || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50 transition duration-150"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50 transition duration-150"
                >
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Commercial</option>
                  <option>Land</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Price
                </label>

                <input
                  type="number"
                  name="property_price"
                  value={formData.property_price || 0}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50 transition duration-150"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50 transition duration-150"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Image Link
                </label>

                <input
                  type="text"
                  name="image_link"
                  value={formData.image_link || ""}
                  onChange={handleChange}
                  className="w-full border p-2 rounded-md focus:border-[#FF6B6B] focus:ring focus:ring-[#FF6B6B] focus:ring-opacity-50 transition duration-150"
                />
              </div>

             
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  User Name
                </label>

                <input
                  type="text"
                  value={formData.posted_by || ""} 
                  readOnly
                  className="w-full border p-2 rounded-md  cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  User Email
                </label>

                <input
                  type="text"
                  value={formData.email || ""} 
                  readOnly
                  className="w-full border p-2 rounded-md  cursor-not-allowed"
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400 transition duration-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="text-white px-4 py-2 rounded-md font-semibold
 bg-linear-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#E05297] 
   hover:from-[#E05297] hover:to-[#FF6B6B] transition duration-500 ease-in-out"
                >
                  Update Property
                </button>
              </div>
            </form>
          )}

          <div className="modal-action">
            <form method="dialog">
            

              <button
                className="btn btn-sm bg-gray-200 hover:bg-gray-300"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default MyProperty;
