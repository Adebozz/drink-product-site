// src/store.js
import create from "zustand";

const useStore = create((set) => ({
  selectedProduct: null,
  setSelectedProduct: (product) => set({ selectedProduct: product }),
}));

export default useStore;
