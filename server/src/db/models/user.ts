import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "../../interfaces";

const UserSchema: Schema = new Schema(
  {
    name: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true, unique: true },
    password: { type: Schema.Types.String, required: true },
    isStatus: { type: Schema.Types.String, required: true },
    roleId: { type: Schema.Types.String, required: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);
export const User = mongoose.model<IUser>("User", UserSchema);
