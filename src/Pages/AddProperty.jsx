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

    console.log(propertyName,description,price,location,
        photo,category,postedDate
    )
    const newProperty = {
    property_name: propertyName,
    short_description:description,
    property_price:price,
    location,
    image_link:photo,
    category,
    posted_date:postedDate,
    posted_by: user?.email, // or user.displayName
  };
fetch('http://localhost:3000/properties',{
    method:'POST',
    headers:{
        'content-type' :'application/json'
    },
    body:JSON.stringify(newProperty)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        toast.success('property added successfully')
    }
    
})
.catch (e=>{
    console.log(e)
})


  };
  return (
    <div className="bg-gray-100 py-10">
      <div className="w-[500px] bg-white mx-auto rounded-lg shadow-lg p-4">
        <h2 className="text-2xl text-red-400 ">
          A platform to provide best offers and deals!!
        </h2>

        <p className="font-bold text-gray-800">
          Enter information about your property and help us to give the best
          deals...
        </p>
        <h4 className="text-center text-gray-700 font-semibold">
          Property info
        </h4>

        <form onSubmit={handleAddProperty}>
          <fieldset className="fieldset">
            <label className="label text-black font-semibold">
              Property Name
            </label>
            <input
              name="property"
              type="text"
              className="input"
              placeholder="Property Name"
            />

            <label className="label text-black font-semibold">
              Description
            </label>
            <textarea
              name="description"
              id=""
              cols="5"
              rows="2"
              className="border"
            ></textarea>
            {/* <input
              name="description"
              type="text"
              className="input"
              placeholder="Short description"
            /> */}

            <div className="flex justify-between">
              <div>
                <label className="label text-black font-semibold">Price</label>
                <br />

                <input
                  name="price"
                  type="number"
                  className="input w-full"
                  placeholder="Property Name"
                />
              </div>
              <div>
                <label className="label text-black font-semibold">
                  Category
                </label>
                <br />
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  className="select w-full"
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
            <label className="label text-black font-semibold">Location</label>
            <input
              name="location"
              type="text"
              className="input"
              placeholder="Property Location"
            />
            <label className="label">Property Photo</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
            />
            <label className="label text-black font-semibold">User Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder={user.email || "user email"}
              readOnly
            />
            <label className="label text-black font-semibold">User Name</label>
            <input
              name="user"
              type="text"
              className="input"
              placeholder={user.displayName || "not found"}
              readOnly
            />

            <button type="submit" className="w-full py-3 font-semibold text-white rounded-lg bg-[#4A89F7] hover:bg-[#3a75e2] transition duration-300 ease-in-out mt-4">
              Add Property
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
