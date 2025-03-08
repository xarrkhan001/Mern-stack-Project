import { set } from "mongoose";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
}));
