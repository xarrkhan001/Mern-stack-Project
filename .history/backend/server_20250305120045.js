import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept json data in the req.body

app.use("/api/products");

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
  connectDB();
});
