import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-gray-100 dark:bg-gray-900 dark:text-white">
        {" "}
        {/* Lighter background color */}
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
