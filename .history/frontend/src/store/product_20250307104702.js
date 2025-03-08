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

      // Check if the response is OK (status code 2xx)
      if (!res.ok) {
        const errorData = await res.json();
        return {
          success: false,
          message: errorData.message || "Failed to delete product.",
        };
      }

      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message };
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      // Handle any network or unexpected errors
      return {
        success: false,
        message:
          error.message || "An error occurred while deleting the product.",
      };
    }
  },
}));
