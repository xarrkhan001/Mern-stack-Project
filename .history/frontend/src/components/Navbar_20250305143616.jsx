import React from "react";
import { Link } from "react-router-dom"; // Link import kiya
import { FaPlus } from "react-icons/fa"; // Plus icon ke liye react-icons ka use karenge

const Navbar = () => {
  return (
    <>
      <div className="max-w-[1140px] px-4 mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-16">
          {/* Left side - ProductStore logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-[#231651] hover:text-blue-500"
          >
            ProductStore
          </Link>

          {/* Right side - Plus Icon */}
          <div className="relative">
            <Link to="/create">
              <button className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 focus:outline-none">
                <FaPlus size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
