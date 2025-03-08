import React from "react";
import { FaBox } from "react-icons/fa"; // Example icon from react-icons

const HomePage = () => {
  return (
    <div className="max-w-xl py-12 mx-auto text-center">
      <h1 className="text-3xl text-gray-400 flex justify-center items-center space-x-2">
        <FaBox />
        <span>Current Products</span>
      </h1>
    </div>
  );
};

export default HomePage;
