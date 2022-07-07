import React from "react";
import { Link } from "react-router-dom";
import Oregano from "../assets/plants/Oregano.jpg";

const PlantList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-6 text-center">List of Available Herbal Plants</h2>
        <div className="grid md:grid-cols-2 gap-5">
          <article className="bg-white flex items-center rounded overflow-hidden shadow">
            <div>
              <img src={Oregano} className="w-28" alt="Oregano" />
            </div>
            <div>
              <h3 className="font-medium md:text-lg pl-5">Oregano</h3>
            </div>
          </article>
          <article className="bg-white flex items-center rounded overflow-hidden shadow">
            <div>
              <img src={Oregano} className="w-28" alt="Oregano" />
            </div>
            <div>
              <h3 className="font-medium md:text-lg pl-5">Lagundi</h3>
            </div>
          </article>
          <article className="bg-white flex items-center rounded overflow-hidden shadow">
            <div>
              <img src={Oregano} className="w-28" alt="Oregano" />
            </div>
            <div>
              <h3 className="font-medium md:text-lg pl-5">Garlic</h3>
            </div>
          </article>
          <article className="bg-white flex items-center rounded overflow-hidden shadow">
            <div>
              <img src={Oregano} className="w-28" alt="Oregano" />
            </div>
            <div>
              <h3 className="font-medium md:text-lg pl-5">Sambong</h3>
            </div>
          </article>
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
