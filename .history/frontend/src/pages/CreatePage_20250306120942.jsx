import React, { useState } from "react";
import { FaRegFileAlt, FaTag, FaImage } from "react-icons/fa";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added:", newProduct);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {" "}
      {/* Centering the form */}
      <div className="max-w-md w-full bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
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
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaRegFileAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Product Price Field */}
          <div className="mb-4 relative">
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Image URL Field */}
          <div className="mb-6 relative">
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
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
