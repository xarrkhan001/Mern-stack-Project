import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields." };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();

    // Corrected line: return the updated state directly
    set((state) => ({
      products: [...state.products, data.data], // Directly returning the updated state
    }));

    return { success: true, message: "Product created successfully" };
  },

  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  deleteProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/${pid}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        return { success: false, message: "Failed to delete product." };
      }

      const data = await res.json();

      // Log the response to check if the structure is as expected
      console.log(data);

      if (!data.success) {
        return {
          success: false,
          message: data.message || "Error deleting product",
        };
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));

      return {
        success: true,
        message: data.message || "Product deleted successfully",
      };
    } catch (error) {
      console.error("Error deleting product:", error);
      return {
        success: false,
        message: "An error occurred while deleting the product.",
      };
    }
  },
}));
