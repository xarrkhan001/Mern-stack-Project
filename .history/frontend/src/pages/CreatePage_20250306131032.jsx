import React, { useState } from "react";
import { FaRegFileAlt, FaTag, FaImage } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion

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
    <div className="flex justify-center items-center pt-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <motion.div
        className="max-w-md lg:max-w-3xl w-full bg-white dark:bg-gray-800 p-8 sm:p-10 shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 50 }} // Start from invisible and slightly down
        animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-400 dark:text-gray-200 text-center mb-8">
          Create New Product
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Product Name Field */}
          <motion.div
            className="mb-6 relative"
            initial={{ opacity: 0, y: 20 }} // Start from invisible and slightly down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="w-full p-4 pl-12 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 dark:bg-gray-700 dark:text-gray-200 transition duration-300 ease-in-out"
            />
            <FaRegFileAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </motion.div>

          {/* Product Price Field */}
          <motion.div
            className="mb-6 relative"
            initial={{ opacity: 0, y: 20 }} // Start from invisible and slightly down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-4 pl-12 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 dark:bg-gray-700 dark:text-gray-200 transition duration-300 ease-in-out"
            />
            <FaTag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </motion.div>

          {/* Image URL Field */}
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, y: 20 }} // Start from invisible and slightly down
            animate={{ opacity: 1, y: 0 }} // Fade in and move to normal position
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full p-4 pl-12 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 dark:bg-gray-700 dark:text-gray-200 transition duration-300 ease-in-out"
            />
            <FaImage className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }} // Start from invisible
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              type="submit"
              className="w-full p-4 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-500 focus:ring-4 focus:ring-red-200 transition duration-300 transform hover:scale-105"
            >
              Add Product
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePage;
