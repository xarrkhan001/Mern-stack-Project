import React from "react";
import { FaBox } from "react-icons/fa"; // Example icon from react-icons

const HomePage = () => {
  return (
    <div className="max-w-xl py-12 mx-auto text-center">
      <h1 className="text-3xl text-red-400 flex justify-center items-center space-x-2">
        <FaBox />
        <span
          className="text-gray-500  font-bold"
          style={{
            fontFamily: "'Dancing Script', cursive",
            letterSpacing: "-1px",
            lineHeight: "1.1",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          Current Products
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
