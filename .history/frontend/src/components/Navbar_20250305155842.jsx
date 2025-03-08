import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1140px] px-4 mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-20 bg-[#4B421B] p-4 rounded-xl shadow-lg">
          {/* Left side - ProductStore logo */}
          <Link to="/" className="font-bold flex items-center space-x-2">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FF80AB]">
              Product
            </span>
            <span className="text-3xl text-white font-serif font-mono">
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
