import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";

const List = () => {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = "https://whispering-lowlands-67883.herokuapp.com/api/posts?populate=*";

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const fetchPlants = async () => {
      setLoading(true);
      const response = await fetch(`${endpoint}`);
      const data = await response.json();
      setPlants(data.data);
      setLoading(false);
    };

    fetchPlants();
    scrollToTop();
  }, []);

  return (
    <section className="py-28">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-6">List of Available Herbal Plants</h2>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid md:grid-cols-2 gap-5 pt-4">
            {plants.map((plant) => (
              <div key={plant.id}>
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
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default List;
