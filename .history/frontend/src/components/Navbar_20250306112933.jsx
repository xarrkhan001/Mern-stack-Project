import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
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
        <div className="flex items-center justify-between h-20 bg-transparent dark:bg-transparent p-4 rounded-xl shadow-lg text-black dark:text-white">
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
                className="text-5xl font-semibold text-red-300 dark:text-gray-200"
                style={{
                  letterSpacing: "-1px", // Tighter spacing for "Product"
                }}
              >
                Product
              </span>
              <span
                className="text-4xl text-red-300 dark:text-gray-200"
                style={{
                  letterSpacing: "-1px", // Tighter spacing for "Store"
                }}
              >
                Store
              </span>
            </span>
          </Link>

          {/* Right side - Plus Icon and Theme Toggle Icon */}
          <div className="relative flex items-center space-x-4">
            {/* Plus Icon */}
            <Link to="/create">
              <button className="w-14 h-14 bg-white dark:bg-gray-500 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none">
                <FaPlus size={24} />
              </button>
            </Link>

            {/* Dark/Light Mode Toggle Icon */}
            <button
              onClick={toggleDarkMode}
              className="w-14 h-14 bg-white dark:bg-gray-500 text-[#FF4081] dark:text-white rounded-full flex items-center justify-center transform hover:scale-125 transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none"
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
