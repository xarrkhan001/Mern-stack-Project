import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaShoppingCart, FaSun, FaMoon } from "react-icons/fa";

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
    <div className="max-w-[1140px] px-4 mx-auto">
      {/* Navbar container */}
      <div
        className={`flex items-center justify-between mt-2 h-20 p-4 rounded-xl shadow-md text-black dark:text-white ${
          isDarkMode ? "bg-transparent dark:bg-gray-800" : "bg-gray-50"
        }`}
      >
        {/* Left side - ProductStore logo */}
        <Link to="/" className="flex items-center space-x-1 sm:space-x-2">
          <span
            className="font-logo text-4xl sm:text-5xl tracking-tight text-red-500 dark:text-gray-100"
            style={{
              fontFamily: "'Dancing Script', cursive",
              letterSpacing: "-1px",
              lineHeight: "1.1",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            <span className="text-4xl sm:text-5xl font-semibold text-red-400 dark:text-red-400">
              Product
            </span>
            <span className="text-3xl sm:text-4xl text-gray-400 dark:text-gray-400">
              Store
            </span>
          </span>
          <FaShoppingCart className="text-3xl sm:text-4xl text-gray-400 dark:text-gray-300 ml-1 sm:ml-2" />
        </Link>

        {/* Right side - Icons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Plus Icon */}
          <Link to="/create">
            <button className="w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-500 text-gray-600 dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
              <FaPlus size={14} />
            </button>
          </Link>

          {/* Dark/Light Mode Toggle Icon */}
          <button
            onClick={toggleDarkMode}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white dark:bg-gray-500 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none"
          >
            {isDarkMode ? (
              <FaSun size={14} className="text-yellow-500 sm:text-16" />
            ) : (
              <FaMoon size={14} className="text-gray-600 sm:text-16" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
