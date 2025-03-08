import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server started on http://localhost:" + PORT);
  connectDB();
});
