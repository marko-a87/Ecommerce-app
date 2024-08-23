import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  type: String,
  enum: ["Meat", "Vegetables", "Fruit", "Dairy"]
});

const Category = mongoose.model("Category", CategorySchema);
export default Category;
