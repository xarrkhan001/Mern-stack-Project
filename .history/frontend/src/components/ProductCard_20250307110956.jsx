import React from "react";
import { ToastContainer } from "react-toastify";
import ProductCard from "./ProductCard"; // Assuming this is the path of your ProductCard component
import "react-toastify/dist/ReactToastify.css"; // Make sure you've imported the CSS

const App = () => {
  return (
    <div>
      <ToastContainer />
      {/* Other components */}
      <ProductCard product={yourProductObjectHere} />
    </div>
  );
};

export default App;
