import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1140px] px-4 mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-20 bg-gradient-to-r from-[#FF80AB] to-[#FFB6C1] p-4 rounded-xl shadow-lg">
          {/* Left side - ProductStore logo */}
          <Link to="/" className="font-bold flex items-center space-x-2">
            <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#388E3C]">
              Product
            </span>
            <span className="text-2xl text-white font-serif">Store</span>
          </Link>

          {/* Right side - Plus Icon */}
          <div className="relative">
            <Link to="/create">
              <button className="w-14 h-14 bg-white text-[#4CAF50] rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
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
