import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    category: {
      //Category that specifies the type of product out of 4 types
      
      type: String,

      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: URL,
      required: true
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
export default Product;
