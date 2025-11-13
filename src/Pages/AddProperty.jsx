
import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const AddProperty = () => {
  const { user } = use(AuthContext);
  const [category, setCategory] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleAddProperty = (e) => {
    e.preventDefault();
    const propertyName = e.target.property.value;
    const description = e.target.description.value;
    const price = parseInt(e.target.price.value);
    const location = e.target.location.value;
    const photo = e.target.photo.value;
    const postedDate = new Date().toISOString();

    // console.log(
    //   propertyName,
    //   description,
    //   price,
    //   location,
    //   photo,
    //   category,
    //   postedDate
    // );
    const newProperty = {
      property_name: propertyName,
      short_description: description,
      property_price: price,
      location,
      image_link: photo,
      category,
      posted_date: postedDate,
      posted_by: user?.displayName,
      email: user?.email,
    };
    fetch("http://localhost:3000/properties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Property added successfully");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    
    <div className="py-10 min-h-screen flex items-center justify-center">
     
      <div className="w-[500px] bg-white mx-auto rounded-xl shadow-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-[#E05297]">
          Add New Property
        </h2>

        <p className="font-medium text-center text-gray-600 mt-2 mb-6">
          Enter information about your property to list it on the platform.
        </p>
        <hr className="my-4" />

        <form onSubmit={handleAddProperty}>
          <fieldset className="space-y-4">
            
            <div>
              <label className="label text-gray-700 font-semibold mb-1 block">
                Property Name
              </label>
              <input
                name="property"
                type="text"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
                placeholder="Property name"
                required
              />
            </div>

            <div>
              <label className="label text-gray-700 font-semibold mb-1 block">
                Description
              </label>
              <textarea
                name="description"
                cols="5"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
                placeholder="Short description of the property features"
                required
              ></textarea>
            </div>

            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <label className="label text-gray-700 font-semibold mb-1 block">
                  Price ($)
                </label>

                <input
                  name="price"
                  type="number"
                  className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
                  placeholder="e.g., 250000"
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="label text-gray-700 font-semibold mb-1 block">
                  Category
                </label>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B] bg-white"
                  required
                >
                  <option disabled value="">
                    Select category
                  </option>
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Land">Land</option>
                </select>
              </div>
            </div>
            <div>
              <label className="label text-gray-700 font-semibold mb-1 block">
                Location
              </label>
              <input
                name="location"
                type="text"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
                placeholder="City, State/Province, Country"
                required
              />
            </div>
            <div>
              <label className="label text-gray-700 font-semibold mb-1 block">
                Property Photo (URL)
              </label>
              <input
                name="photo"
                type="text"
                className="input input-bordered w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF6B6B]"
                placeholder="Direct link to the photo"
                required
              />
            </div>

           
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label text-gray-700 font-semibold mb-1 block">
                  User Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                  placeholder={user?.email || "user email"}
                  value={user?.email || ""}
                  readOnly
                />
              </div>
              <div>
                <label className="label text-gray-700 font-semibold mb-1 block">
                  User Name
                </label>
                <input
                  name="user"
                  type="text"
                  className="input input-bordered w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500"
                  placeholder={user?.displayName || "not found"}
                  value={user?.displayName || ""}
                  readOnly
                />
              </div>
            </div>

            {/* Submit Button - Updated with gradient from Login component */}
            <button
              type="submit"
              className="w-full py-3 font-semibold text-white rounded-lg 
              bg-linear-to-r from-[#FF6B6B] via-[#FF8E8E] to-[#E05297] 
              hover:from-[#E05297] hover:to-[#FF6B6B] transition duration-500 ease-in-out mt-6"
            >
              Add Property
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;