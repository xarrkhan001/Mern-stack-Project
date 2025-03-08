import React from "react";
import { FaBox } from "react-icons/fa"; // Example icon from react-icons
import { Link } from "react-router-dom"; // Import Link for routing

const HomePage = () => {
  return (
    <div className="max-w-xl py-12 mx-auto text-center">
      <h1 className="text-3xl text-red-400 flex justify-center items-center space-x-2">
        <FaBox />
        <span
          className="text-gray-500 font-bold"
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

      {/* No Products Found Text */}
      <p className="text-gray-500 mt-4 font-semibold">No Products Found</p>

      {/* Create New Product Button */}
      <div className="mt-6">
        <Link to="/create">
          <button className="px-6 py-2 text-white ">Create New Product</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
