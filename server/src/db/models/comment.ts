import { IComment } from "../../interfaces";
import mongoose, { Schema, Document } from "mongoose";

const CommentSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    productId: { type: Schema.Types.ObjectId, required: true },
    comment: { type: Schema.Types.String, required: true },
    rating: { type: Schema.Types.Number, required: true },
    // dateOfCreation: {
    //   type: Schema.Types.Date,

    //   default: Date.now,
    // },

    // dateOfModification: {
    //   type: Schema.Types.Date,

    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

export const Comment = mongoose.model<IComment>("Comment", CommentSchema);
