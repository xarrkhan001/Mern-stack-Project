import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#fdf9f2] dark:bg-gray-900 dark:text-white">
        {/* Apply padding-top to ensure the content starts below the navbar */}
        <Navbar />
        <div className="pt-20">
          {" "}
          {/* Add padding-top here */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
