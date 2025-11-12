import React, { use, useEffect, useState } from "react";
import SinglePropertyCard from "./SinglePropertyCard";
import { AuthContext } from "../context/AuthContext";

const AllPropertiesCard = ({ allPropertiesPromise,search }) => {
  const {setLoading} = use(AuthContext)
  const allProperties = use(allPropertiesPromise);
  
  const [searchedApp, setSearchedApp] = useState([]);

  console.log(allProperties);
   useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const term = search.trim().toLowerCase();
      const filtered = term
        ? allProperties.filter((searchedProperties) =>searchedProperties.property_name.toLowerCase().includes(term))
        : allProperties;
      setSearchedApp(filtered);
      setLoading(false);
      
    }, 500);

    return () => clearTimeout(timer);
  }, [search,allProperties,setLoading]);

  return (
    <div>
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchedApp.map((property) => (
          <SinglePropertyCard property={property}
      ></SinglePropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllPropertiesCard;
