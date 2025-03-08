import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { deleteProduct, updateProduct } = useProductStore();
  const [showModal, setShowModal] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  // Handle delete product
  const handleDeleteProduct = async (pid) => {
    try {
      const { success, message } = await deleteProduct(pid);
      console.log(success, message);
      if (success) {
        toast.success(message); // Show success toast
      } else {
        toast.error(message); // Show error toast
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Something went wrong while deleting the product.");
    }
  };

  // Handle update product
  const handleUpdateProduct = async () => {
    try {
      const response = await updateProduct(product._id, updatedProduct);

      
     
    

  return (
    <>
      <div className="dark:bg-gray-800 bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
        {/* Product content */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-md mb-2">{product.name}</h1>
          <p className="text-xl font-bold mb-4">PKR {product.price}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <FaEdit size={20} />
            </button>
            <button
              onClick={() => handleDeleteProduct(product._id)}
              className="text-red-500 hover:text-red-700 transition duration-300"
            >
              <FaTrashAlt size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="p-6 dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Update Product
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProduct(); // Trigger update
              }}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-200"
                  htmlFor="name"
                >
                  Product Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={updatedProduct.name}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      name: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-200"
                  htmlFor="price"
                >
                  Price (PKR)
                </label>
                <input
                  id="price"
                  type="number"
                  value={updatedProduct.price}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      price: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 dark:text-gray-200"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  id="image"
                  type="text"
                  value={updatedProduct.image}
                  onChange={(e) =>
                    setUpdatedProduct({
                      ...updatedProduct,
                      image: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)} // Close modal if cancel is clicked
                  className="bg-gray-300 text-black py-2 px-4 rounded-md dark:bg-gray-700 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
