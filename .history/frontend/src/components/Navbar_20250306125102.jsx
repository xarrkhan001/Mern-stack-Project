import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaShoppingCart, FaSun, FaMoon, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className={`flex items-center justify-between h-20 p-4 rounded-xl shadow-md text-black dark:text-white ${
          isDarkMode ? "bg-transparent dark:bg-gray-800" : "bg-gray-50"
        }`}
      >
        {/* Left side - ProductStore logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span
            className="font-logo text-5xl tracking-tight text-red-500 dark:text-gray-100"
            style={{
              fontFamily: "'Dancing Script', cursive",
              letterSpacing: "-1px",
              lineHeight: "1.1",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            <span className="text-5xl font-semibold text-red-400 dark:text-red-400">
              Product
            </span>
            <span className="text-4xl text-gray-400 dark:text-gray-400">
              Store
            </span>
          </span>
          <FaShoppingCart className="text-4xl text-gray-400 dark:text-gray-300 ml-2" />
        </Link>

        {/* Hamburger icon for mobile */}
        <button
          className="lg:hidden text-gray-600 dark:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars size={24} />
        </button>

        {/* Right side - Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/create">
            <button className="w-12 h-12 bg-white dark:bg-gray-500 text-gray-600 dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
              <FaPlus size={18} />
            </button>
          </Link>

          {/* Dark/Light Mode Toggle Icon */}
          <button
            onClick={toggleDarkMode}
            className="w-12 h-12 bg-white dark:bg-gray-500 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none"
          >
            {isDarkMode ? (
              <FaSun size={18} className="text-yellow-500" />
            ) : (
              <FaMoon size={18} className="text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Toggle visibility based on isMenuOpen state */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-50 dark:bg-gray-800 p-4 rounded-b-xl shadow-md space-y-4">
          <Link
            to="/create"
            className="block text-xl text-gray-600 dark:text-white"
          >
            Create Product
          </Link>
          <button
            onClick={toggleDarkMode}
            className="w-full bg-white dark:bg-gray-500 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center p-3"
          >
            {isDarkMode ? (
              <FaSun size={18} className="text-yellow-500" />
            ) : (
              <FaMoon size={18} className="text-gray-600" />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
