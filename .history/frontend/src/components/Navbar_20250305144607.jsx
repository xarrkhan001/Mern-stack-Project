import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1140px] px-4 mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-16">
          {/* Left side - ProductStore logo */}
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4081] to-[#FF80AB] mr-2">
              Product
            </span>
            <span className="text-[#231651]">Store</span>
          </Link>

          {/* Right side - Plus Icon */}
          <div className="relative">
            <Link to="/create">
              <button className="w-12 h-12 bg-gradient-to-r from-[#FF4081] to-[#FF80AB] text-white rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300 focus:outline-none">
                <FaPlus size={22} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
