import React, { useEffect } from "react";
import "@splidejs/react-splide/css/sea-green";
import Mockup from "../assets/mockup.png";
import PlantList from "../components/PlantList";
import TopPlants from "../components/TopPlants";
import DownloadBtn from "../components/DownloadBtn";

const Home = () => {
  const title = "Scan and Identify Herbal Plants for free";
  const subtitle = "Download Myranel’s IdentiPlant to scan herbal plants. Available only for Android devices.";

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  });

  return (
    <>
      <main>
        <section className="bg-heroBg bg-no-repeat bg-center bg-cover relative">
          <div className="bg-black bg-opacity-70 min-h-screen absolute z-10 w-full"></div>
          <div className="min-h-screen container mx-auto flex md:items-center flex-col justify-center md:flex-row pt-10 px-4 lg:px-0">
            <div className="z-40 md:flex-1 text-center md:text-left">
              <h1 className="text-white font-bold text-4xl lg:text-5xl">{title}</h1>
              <p className="text-white md:text-lg py-6">{subtitle}</p>
              <DownloadBtn />
            </div>
            <div className="hidden md:flex md:z-10 md:flex-1">
              <img src={Mockup} className="mx-auto md:w-80 lg:w-96" alt="App mockup" />
            </div>
          </div>
        </section>
      </main>
      <TopPlants />
      <PlantList />
    </>
  );
};

export default Home;
