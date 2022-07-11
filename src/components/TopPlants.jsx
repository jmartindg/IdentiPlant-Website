import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const TopPlants = () => {
  const [plants, setPlants] = useState([]);
  const endpoint = "https://whispering-lowlands-67883.herokuapp.com/api/posts?populate=*";

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      setPlants(data.data);
    };

    fetchPlants();
    scrollToTop();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-6 text-center">Top Herbal Plants</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {plants
            .map((plant) => (
              <div key={plant.id}>
                <article className="bg-white rounded overflow-hidden">
                  <img
                    src={plant.attributes.plant_image.data.attributes.formats.small.url}
                    className="object-cover w-full h-52"
                    alt={plant.attributes.plant_name}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold pb-1">{plant.attributes.plant_name}</h3>
                    <div className="flex items-center space-x-1">
                      <AiOutlineHeart />
                      <span className="text-sm">56 likes</span>
                    </div>
                  </div>
                </article>
              </div>
            ))
            .slice(0, 5)}
        </div>
      </div>
    </section>
  );
};

export default TopPlants;
