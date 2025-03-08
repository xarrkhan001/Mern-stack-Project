import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();

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

  return (
    <>
      <div className="dark:bg-gray-800 bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl transform hover:scale-105 w-full sm:w-72 md:w-80 lg:w-96 xl:w-[450px]">
        {/* Increased width for larger screens */}
        {/* Product content */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover md:h-80 lg:h-96"
        />
        <div className="p-4">
          <h1 className="text-lg md:text-xl lg:text-2xl mb-2">
            {product.name}
          </h1>
          <p className="text-lg md:text-xl font-bold mb-4">
            PKR {product.price}
          </p>
          <div className="flex justify-between items-center">
            <button className="text-blue-500 hover:text-blue-700 transition duration-300">
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
    </>
  );
};

export default ProductCard;
