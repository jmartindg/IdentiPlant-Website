import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import Mockup from "../assets/mockup.png";
import Oregano from "../assets/plants/Oregano.jpg";
import Lagundi from "../assets/plants/Lagundi.jpg";
import Garlic from "../assets/plants/Garlic.jpg";
import Sambong from "../assets/plants/Sambong.jpg";
import { AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  const title = "Scan and Identify Herbal Plants for free";
  const subtitle = "Download Myranel’s IdentiPlant to scan herbal plants. Available only for Android devices.";

  return (
    <>
      <main>
        <section className="bg-heroBg bg-no-repeat bg-center bg-cover relative">
          <div className="bg-black bg-opacity-70 min-h-screen absolute z-10 w-full"></div>
          <div className="min-h-screen container mx-auto flex md:items-center flex-col justify-center md:flex-row pt-10 px-4 lg:px-0">
            <div className="z-40 md:flex-1 text-center md:text-left">
              <h1 className="text-white font-bold text-4xl lg:text-5xl">{title}</h1>
              <p className="text-white md:text-lg py-6">{subtitle}</p>
              <a href="#" className="hero-btn" download>
                Download
              </a>
            </div>
            <div className="hidden md:flex md:z-10 md:flex-1">
              <img src={Mockup} className="mx-auto md:w-80 lg:w-96" alt="App mockup" />
            </div>
          </div>
        </section>
      </main>
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
    </>
  );
};

export default Home;
