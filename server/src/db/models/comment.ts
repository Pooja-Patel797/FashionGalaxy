import { IComment } from "../../interfaces";
import mongoose, { Schema, Document } from "mongoose";

const CommentSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    product: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
    comment: { type: Schema.Types.String, required: true },
    rating: { type: Schema.Types.Number, required: true },
  },
  { timestamps: true }
);

export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
