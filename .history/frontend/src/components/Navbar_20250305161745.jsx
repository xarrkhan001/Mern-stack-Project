import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  // State for managing dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for saved theme preference in local storage (if any)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  // Toggle dark mode and save preference in localStorage
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply dark or light theme based on the state
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="max-w-[1140px] px-4 mx-auto">
        {/* Navbar container */}
        <div className="flex items-center justify-between h-20 bg-[#a88d62] dark:bg-gray-700 p-4 rounded-xl shadow-lg text-black dark:text-white">
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

          {/* Right side - Plus Icon and Theme Toggle Icon */}
          <div className="relative flex items-center space-x-4">
            {/* Plus Icon */}
            <Link to="/create">
              <button className="w-14 h-14 bg-white dark:bg-gray-800 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
                <FaPlus size={24} />
              </button>
            </Link>

            {/* Dark/Light Mode Toggle Icon */}
            <button
              onClick={toggleDarkMode}
              className="w-14 h-14 bg-white dark:bg-gray-800 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none"
            >
              {isDarkMode ? (
                <FaSun size={24} /> // Sun icon for dark mode
              ) : (
                <FaMoon size={24} /> // Moon icon for light mode
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
