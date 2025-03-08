import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Api for fetching all te products

router.get("/", getProducts);

// Api for fetching a singal product
router.post("/", createProduct);

// Api for updating a product

router.put("/:id", updateProduct);

// Api for deleting a product
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting product:", error.message);
    res.status(404).json({ success: false, message: "Product not found" });
  }
});

export default router;
