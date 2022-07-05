import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import Oregano from "../assets/plants/Oregano.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const PlantList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="font-bold text-2xl pb-6 text-center">List of Available Herbal Plants</h2>
        <Splide
          tag="section"
          aria-label="Top herbal plants"
          options={{
            perPage: 2,
            gap: "1.5rem",
            breakpoints: {
              640: {
                perPage: 2,
              },
              525: {
                perPage: 1,
              },
              420: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide className="space-y-5">
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide className="space-y-5">
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide className="space-y-5">
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
          </SplideSlide>
          <SplideSlide className="space-y-5">
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
                <div className="flex items-center space-x-1">
                  <AiOutlineHeart />
                  <span className="text-sm">56 likes</span>
                </div>
              </div>
            </article>
            <article className="bg-white rounded flex items-center overflow-hidden">
              <div>
                <img src={Oregano} className="object-cover w-full" alt="Oregano" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold pb-1">Oregano</h3>
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

export default PlantList;
