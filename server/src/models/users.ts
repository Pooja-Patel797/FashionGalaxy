import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  isStatus: Number,
  roleId: String,
});
export const User = mongoose.model("User", UserSchema);
