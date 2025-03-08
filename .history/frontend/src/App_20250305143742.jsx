import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#D6FFF6]">
        {" "}
        {/* Add bg-gray-700 here */}
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
