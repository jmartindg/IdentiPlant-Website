import React from "react";
import { BsPinMapFill } from "react-icons/bs";
import { AiFillPhone } from "react-icons/ai";
import Logo from "../assets/Logo-light.png";

const Footer = () => {
  return (
    <footer>
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 lg:px-0">
          <h2 className="text-gray-100 font-bold text-3xl pb-6 text-center">Where to find Myranel's Plant Shop?</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="text-center flex items-center flex-col md:flex-row">
              <BsPinMapFill className="text-gray-100 text-2xl md:mr-4 mb-2 md:mb-0" />
              <p className="text-gray-100">
                8 Greenland Plants & Orchids Center Cartimar, Barangay 38, 1300 Pasay City NCR Fourth District, Philippines
              </p>
            </div>
            <div className="text-center flex items-center flex-col md:flex-row">
              <AiFillPhone className="text-gray-100 text-2xl md:mr-2 mb-2 md:mb-0" />
              <p className="text-gray-100">09658762312</p>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className="bg-green-700">
        <div className="container mx-auto px-4 lg:px-0 py-10">
          <img src={Logo} className="mx-auto w-36" alt="IdentiPlant Logo" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
