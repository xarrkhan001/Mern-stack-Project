import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

// Use JSON parser middleware
app.use(express.json());

// Endpoint for creating a product
app.post("/api/products", async (req, res) => {
  const { name, price, image } = req.body; // Destructure from body

  if (!name || !price || !image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product({ name, price, image });

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Start server after connecting to DB
connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server started on http://localhost:5000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });
