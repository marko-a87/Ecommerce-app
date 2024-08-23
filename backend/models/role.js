import mongoose from "mongoose";

const RoleSchema = new mongoose.Schema({
  type: String,
  enum: ["admin", "user"],
  default: "user"
});

const Role = mongoose.model("Role", RoleSchema);
export default Role;
