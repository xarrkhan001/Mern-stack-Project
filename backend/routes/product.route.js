import express from "express";

import {
  createProduct,
  deleteProduct,
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
router.delete("/:id", deleteProduct);

export default router;
