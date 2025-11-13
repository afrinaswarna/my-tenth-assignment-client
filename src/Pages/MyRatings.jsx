import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import MyRatingsCard from "../components/MyRatingsCard";

const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://my-tenth-assignment-server-alpha.vercel.app/user-reviews?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRatings(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-500">Loading your reviews...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">
        My Ratings & Reviews
      </h2>

      {ratings.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t posted any reviews yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ratings.map((singleRatingData) => (
            <MyRatingsCard
              key={singleRatingData._id}
              singleRatingData={singleRatingData}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRatings;
