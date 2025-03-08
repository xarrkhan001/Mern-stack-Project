import React, { useState } from "react";
import { FaRegFileAlt, FaTag, FaImage } from "react-icons/fa";
import { motion } from "framer-motion"; // Importing Framer Motion
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // For error message
  const [loading, setLoading] = useState(false); // To show loading state
  const { createProduct } = useProductStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
    setErrorMessage(""); // Reset error message when user modifies the field
  };

  const validateForm = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      setErrorMessage("All fields are required.");
      return false;
    }
    if (isNaN(newProduct.price) || newProduct.price <= 0) {
      setErrorMessage("Please enter a valid price.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // If form is invalid, stop submitting.

    setLoading(true); // Start loading
    setErrorMessage(""); // Reset error message

    try {
      const { success, message } = await createProduct(newProduct);
      if (!success) {
        setErrorMessage(message || "Something went wrong!");
      } else {
        // Reset form fields after successful product creation
        setNewProduct({ name: "", price: "", image: "" });
        alert("Product created successfully!");
      }
    } catch (error) {
      setErrorMessage("Failed to create product. Please try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center pt-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <motion.div
        className="max-w-md lg:max-w-3xl w-full bg-gray-50 dark:bg-gray-800 p-8 sm:p-10 shadow-2xl rounded-3xl border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-500 dark:text-gray-200 text-center mb-8">
          Create New Product
        </h1>

        {/* Error Message */}
        {errorMessage && (
          <motion.div
            className="text-red-500 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {errorMessage}
          </motion.div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Product Name Field */}
          <motion.div
            className="mb-6 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <button
              type="submit"
              disabled={
                loading ||
                !newProduct.name ||
                !newProduct.price ||
                !newProduct.image
              }
              className={`w-full p-4 ${
                loading ||
                !newProduct.name ||
                !newProduct.price ||
                !newProduct.image
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-400 hover:bg-red-500"
              } text-white font-semibold rounded-lg focus:ring-4 focus:ring-red-200 transition duration-300 transform hover:scale-105`}
            >
              {loading ? "Creating..." : "Add Product"}
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default CreatePage;
