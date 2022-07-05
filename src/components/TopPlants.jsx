import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import Oregano from "../assets/plants/Oregano.jpg";
import Lagundi from "../assets/plants/Lagundi.jpg";
import Garlic from "../assets/plants/Garlic.jpg";
import Sambong from "../assets/plants/Sambong.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const TopPlants = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-6 text-center">Top Herbal Plants</h2>
        <Splide
          tag="section"
          aria-label="Top herbal plants"
          options={{
            perPage: 4,
            gap: "1.5rem",
            breakpoints: {
              640: {
                perPage: 3,
              },
              525: {
                perPage: 2,
              },
              420: {
                perPage: 2,
              },
            },
          }}
        >
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Lagundi} className="object-cover w-full" alt="Lagundi" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Lagundi</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Lagundi} className="object-cover w-full" alt="Lagundi" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Lagundi</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Garlic} className="object-cover w-full" alt="Garlic" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Garlic</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Sambong} className="object-cover w-full" alt="Sambong" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Sambong</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide>
            <article className="bg-white rounded overflow-hidden">
              <img src={Lagundi} className="object-cover w-full" alt="Lagundi" />
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Lagundi</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
};

export default TopPlants;
