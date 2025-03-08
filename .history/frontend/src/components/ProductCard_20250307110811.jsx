import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Importing FontAwesome icons
import { useProductStore } from "../store/product";
import { toast, ToastContainer } from "react-toastify"; // Importing toast and ToastContainer from react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toastify

const ProductCard = ({ product }) => {
  const { deleteProduct } = useProductStore();

  // Handle delete product
  const handleDeleteProduct = async (pid) => {
    try {
      const { success, message } = await deleteProduct(pid);
      console.log(success, message); // Add debug log to check the response
      if (success) {
        toast.success(message); // Show success toast
      } else {
        toast.error(message); // Show error toast
      }
    } catch (error) {
      console.error("Error deleting product:", error); // Catch any error that might occur during the delete operation
      toast.error("Something went wrong while deleting the product.");
    }
  };

  return (
    <>
      <div className="dark:bg-gray-800 bg-gray-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
        {/* Product content */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover" // Set height to 48 and apply object-cover
        />

        <div className="p-4">
          <h1 className="text-md mb-2">{product.name}</h1>
          {/* Product price */}
          <p className="text-xl font-bold mb-4">PKR {product.price}</p>
          {/* Icons for edit and delete */}
          <div className="flex space-x-4">
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

      {/* Toast container to display success/error messages */}
      <ToastContainer />
    </>
  );
};

export default ProductCard;
