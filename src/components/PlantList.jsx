import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const endpoint = "https://whispering-lowlands-67883.herokuapp.com/api/posts?populate=*";

  // Fetch all herbal plants from api
  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      setPlants(data.data);
    };

    fetchPlants();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-6 text-center">List of Available Herbal Plants</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {plants
            .map((plant) => (
              <Link to={`/herbal-plant-details/${plant.id}`} className="transition hover:-translate-y-1" key={plant.id}>
                <article className="bg-white flex items-center rounded overflow-hidden shadow">
                  <div>
                    <img
                      src={plant.attributes.plant_image.data.attributes.formats.thumbnail.url}
                      className="w-28 h-24 object-cover"
                      alt={plant.attributes.plant_name}
                    />
                  </div>
                  <div>
                    <h3 className="font-medium md:text-lg pl-5">{plant.attributes.plant_name}</h3>
                  </div>
                </article>
              </Link>
            ))
            .slice(0, 4)}
        </div>
        <div className="pb-10 pt-14 text-center">
          <Link to="/herbal-plants" className="bg-green-600 text-white px-7 py-4 rounded transition hover:bg-green-500">
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlantList;
