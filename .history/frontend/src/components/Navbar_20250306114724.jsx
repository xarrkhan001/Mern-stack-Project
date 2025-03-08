import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

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
        <div
          className={`flex items-center justify-between h-18 p-4 rounded-full shadow-md text-black dark:text-white ${
            isDarkMode ? "bg-transparent dark:bg-gray-800" : "bg-gray-50"
          }`}
        >
          {/* Left side - ProductStore logo */}
          <Link to="/" className="flex items-center">
            {/* Logo-style text */}
            <span
              className="font-logo text-5xl tracking-tight text-red-500 dark:text-gray-100"
              style={{
                fontFamily: "'Dancing Script', cursive", // Handwriting-style font
                letterSpacing: "-1px", // Tighter spacing for a joined look
                lineHeight: "1.1", // Tighter line height
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", // Adding text shadow for depth
                WebkitFontSmoothing: "antialiased", // Smooth font rendering
                MozOsxFontSmoothing: "grayscale", // For MacOS font smoothing
              }}
            >
              <span
                className="text-5xl font-semibold text-red-300 dark:text-red-300"
                style={{
                  letterSpacing: "-1px", // Tighter spacing for "Product"
                }}
              >
                Product
              </span>
              <span
                className="text-4xl text-gray-400 dark:text-gray-400"
                style={{
                  letterSpacing: "-1px", // Tighter spacing for "Store"
                }}
              >
                Store
              </span>
            </span>
            {/* Icon next to the logo on the right side */}
            <FaShoppingCart className="text-4xl text-gray-400 dark:text-gray-300 ml-2" />
          </Link>

          {/* Right side - Plus Icon and Theme Toggle Icon */}
          <div className="relative flex items-center space-x-4">
            {/* Plus Icon */}
            <Link to="/create">
              <button className="w-12 h-12 bg-white dark:bg-gray-500 text-gray-600 dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
                <FaPlus size={18} /> {/* Adjusted the size */}
              </button>
            </Link>

            {/* Dark/Light Mode Toggle Icon */}
            <button
              onClick={toggleDarkMode}
              className="w-12 h-12 bg-white dark:bg-gray-500 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none"
            >
              {isDarkMode ? (
                <FaSun size={18} className="text-yellow-500" /> // Sun icon with yellow color for dark mode
              ) : (
                <FaMoon size={18} className="text-gray-600" /> // Moon icon with gray-600 color for light mode
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
