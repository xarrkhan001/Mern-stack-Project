import { set } from "mongoose";
import { useState } from "react";
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
