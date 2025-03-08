import React, { useState } from "react";
import { FaRegFileAlt, FaTag, FaImage } from "react-icons/fa";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", newProduct);
  };

  return (
    <div className="flex justify-center items-center pt-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-600 p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-6">
          Create New Product
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Product Name Field */}
          <div className="mb-4 relative">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            />
            <FaRegFileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Product Price Field */}
          <div className="mb-4 relative">
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            />
            <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Image URL Field */}
          <div className="mb-6 relative">
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            />
            <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full p-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
