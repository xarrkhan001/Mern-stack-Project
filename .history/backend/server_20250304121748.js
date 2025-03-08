import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", async (req, res) => {
  const product = req.body; // user will send this data

  if (product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please Provide All" });
  }
});

app.listen(5000, () => {
  connectDB();
  console.log("Server started on http://localhost:5000");
});
