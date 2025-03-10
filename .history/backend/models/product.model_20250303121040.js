import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    Image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
