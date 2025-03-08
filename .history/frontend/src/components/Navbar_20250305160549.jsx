import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1140px] px-4 mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-20 bg-[#fdf9f2] p-4 rounded-xl shadow-lg">
          {/* Left side - ProductStore logo */}
          <Link to="/" className="flex items-center">
            {/* "Product" part of the logo - larger and bolder */}
            <span className="text-4xl font-extrabold text-[#fdf9f2]">
              Product
            </span>
            {/* "Store" part of the logo - slightly smaller */}
            <span className="text-2xl text-[#fdf9f2] font-semibold ml-1">
              Store
            </span>
          </Link>

          {/* Right side - Plus Icon */}
          <div className="relative">
            <Link to="/create">
              <button className="w-14 h-14 bg-white text-[#FF4081] rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
                <FaPlus size={24} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
