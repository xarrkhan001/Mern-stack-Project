import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in the req.body

// POST route to create a new product
app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send this data

  // Check if any of the required fields are missing
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  // Ensure price is a number
  product.price = parseFloat(product.price); // Convert price to a number if it's a string

  // Create a new product instance
  const newProduct = new Product(product);

  try {
    // Save the new product to the database
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Start the server and connect to the database
app.listen(5000, () => {
  connectDB(); // Connect to database
  console.log("Server started on http://localhost:5000");
});
