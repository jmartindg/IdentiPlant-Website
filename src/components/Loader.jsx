import React from "react";
import Loading from "../assets/loader.gif";

const Loader = () => {
  return (
    <div className="pt-10 flex justify-center">
      <img src={Loading} alt="Loading..." />
    </div>
  );
};

export default Loader;
