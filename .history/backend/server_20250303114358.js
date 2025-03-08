import express from "express";
import dotenv from "dotenv";

const app = express();

app.get("/", (req, res) => {});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
