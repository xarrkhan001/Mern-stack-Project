import React, { useEffect } from "react";
import { FaBox } from "react-icons/fa"; // Example icon from react-icons
import { Link } from "react-router-dom"; // Import Link for routing
import { useProductStore } from "../store/product";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <div className="max-w-2xl py-12 mx-auto text-center">
      {/* Title Section */}
      <h1 className="text-4xl text-red-500 flex justify-center items-center space-x-3 font-bold">
        <FaBox className="text-4xl" />
        <span
          className="text-gray-700 font-bold dark:text-gray-300"
          style={{
            fontFamily: "'Dancing Script', cursive",
            letterSpacing: "-1px",
            lineHeight: "1.1",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          Current Products
        </span>
      </h1>

      {/* No Products Found Text */}
      {products.length === 0 ? (
        <p className="text-gray-600 mt-6 text-xl font-semibold">
          No Products Found
        </p>
      ) : (
        // Grid Layout for Products
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
              {/* Display product details */}
              <img
                src={product.image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-700">
                {product.name}
              </h2>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <p className="text-blue-500 font-semibold mt-2">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Create New Product Button */}
      <div className="mt-8">
        <Link to="/create">
          <button
            className="px-8 py-3 text-blue-500 font-semibold rounded-lg shadow-md transform transition duration-200 ease-in-out hover:scale-105"
            style={{
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            Create New Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
