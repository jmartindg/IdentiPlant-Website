import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/IdentiPlant-Logo-Dark.png";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed w-full z-50">
      <div className="container mx-auto px-4 lg:px-0 py-4 flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="IdentiPlant Logo" className="h-9" />
          </Link>
        </div>
        <ul className="hidden md:flex items-center space-x-7">
          <li className="uppercase text-sm font-medium hover:underline hover:underline-offset-8">
            <Link to="/">Home</Link>
          </li>
          <li className="uppercase text-sm font-medium hover:underline hover:underline-offset-8">
            <Link to="/about">About</Link>
          </li>
          <li className="uppercase text-sm font-medium hover:underline hover:underline-offset-8">Contact</li>
        </ul>
        <button onClick={handleIsOpen} className="md:hidden">
          <FaBars size={20} />
        </button>
      </div>
      <div className={isOpen ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black bg-opacity-40" : ""}>
        <nav
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] bg-white h-screen bg-primary p-6 ease-in duration-150"
              : "fixed left-[-100%] top-0 p-6 ease-in duration-150"
          }
        >
          <div className="flex items-center justify-between">
            <img src={Logo} alt="IdentiPlant" className="h-10" />
            <button onClick={handleIsOpen}>
              <MdClose size={25} />
            </button>
          </div>
          <div>
            <ul className="space-y-10 my-12 inline-block">
              <li className="uppercase text-sm font-medium hover:underline hover:underline-offset-8">
                <Link to="/">Home</Link>
              </li>
              <li className="uppercase text-sm font-medium hover:underline hover:underline-offset-8">
                <Link to="/about">About</Link>
              </li>
              <li className="uppercase text-sm font-medium hover:underline hover:underline-offset-8">Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
