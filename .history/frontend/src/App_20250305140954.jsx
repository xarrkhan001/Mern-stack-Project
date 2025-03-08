import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
