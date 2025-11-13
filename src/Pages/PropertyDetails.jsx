import React, { use, useState } from "react";
import { FaLocationArrow, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthContext";

import Rating from "react-rating";
import Swal from "sweetalert2";

const PropertyDetails = () => {
  const data = useLoaderData();
  const { user, setLoading } = use(AuthContext);
  const [rating, setRating] = useState(0);

  setLoading(false);

  const PINK_GRADIENT_BG =
    "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600";
  const PINK_ACCENT = "text-pink-600";

  const EmptyStar = <FaStar className="text-gray-300" />;
  const FullStar = <FaStar className={PINK_ACCENT} />;

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    const reviewText = e.target.review.value;

    const reviewData = {
      reviewer_name: user?.displayName || "Anonymous",
      property_name: data.property_name,
      star_rating: rating,
      review_text: reviewText,
      review_date: new Date().toISOString(),
      property_thumbnail: data.image_link,
      reviewer_email: user?.email,
    };

    try {
      const res = await fetch(
        "https://my-tenth-assignment-server-alpha.vercel.app/reviews",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        }
      );

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Review Submitted!",
          text: "Thanks for sharing your experience.",
          confirmButtonColor: "#ec4899",
        });

        e.target.reset();
        setRating(0);
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: "Could not submit your review. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Something went wrong while submitting your review.",
      });
    }
  };

  return (
    <div className=" pb-20">
      <div className="w-11/12 mx-auto py-12">
        <div className="mb-10 p-6 bg-white rounded-lg shadow-md border-t-4 border-pink-500">
          <h2 className="text-5xl font-extrabold text-gray-800 mb-2">
            {data.property_name}
          </h2>
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

              <div
                className={`absolute bottom-5 right-5 ${PINK_GRADIENT_BG} text-white text-2xl font-bold px-6 py-3 rounded-xl shadow-xl`}
              >
                {data.property_price}
                <span className="text-lg ml-1 font-medium">
                  {data.category === "Rent" ? " BDT/month" : " BDT"}
                </span>
              </div>
            </div>

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
              <h3 className="font-bold text-xl mb-4 text-gray-800">
                Key Information
              </h3>
              <table className="table-auto w-full text-left">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <th className="py-2 font-semibold text-gray-700">
                      Category
                    </th>
                    <td className="py-2 text-gray-600">{data.category}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-2 font-semibold text-gray-700">
                      Posted By
                    </th>
                    <td className="py-2 text-gray-600">
                      {data.posted_by || user?.email}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <th className="py-2 font-semibold text-gray-700">
                      Posted Date
                    </th>
                    <td className="py-2 text-gray-600">{data.posted_date}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-pink-50 p-6 rounded-lg shadow-inner text-center">
              <h4 className="font-bold text-xl mb-3 text-pink-700">
                Interested in this Property?
              </h4>
              <button
                className={`w-full py-3 rounded-lg font-bold text-white transition duration-300 ${PINK_GRADIENT_BG}`}
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-pink-200" />

        {/* Review Section */}
        <div className="mt-12">
          <h2 className="font-bold text-3xl text-center mb-10 text-gray-800">
            Ratings and Reviews
          </h2>
          <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-10 border-t-4 border-pink-500">
            <h3 className="text-xl font-semibold mb-5 text-gray-700">
              Leave a Review
            </h3>
            <form
              onSubmit={handleReviewSubmit}
              className="flex flex-col space-y-4"
            >
              {/* Rating Component */}
              <div className="flex items-center space-x-3">
                <span className="font-medium text-gray-700">Your Rating:</span>
                <Rating
                  initialRating={rating}
                  emptySymbol={EmptyStar}
                  fullSymbol={FullStar}
                  onChange={setRating}
                  className="text-2xl"
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
