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
              className="font-logo tracking-tight text-red-500 dark:text-gray-100 hover:text-red-600 transition-colors duration-300"
              style={{
                fontFamily: "'Monoton', cursive",
                fontSize: "2.5rem",
                letterSpacing: "-2px",
                background: "linear-gradient(45deg, #FF4081, #red-500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Product
              <span
                style={{
                  fontSize: "1.5rem",
                  position: "relative",
                  top: "-0.5rem",
                  marginLeft: "-2px",
                }}
              >
                store
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
