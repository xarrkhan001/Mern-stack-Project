import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async(newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
        return {false}
    }
  }
}));
