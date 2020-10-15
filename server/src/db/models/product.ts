import mongoose, { Schema, Document } from "mongoose";
import { IProduct } from "../../interfaces";

const ProductSchema: Schema = new Schema(
  {
    title: { type: Schema.Types.String, required: true },
    description: { type: Schema.Types.String, required: true },
    brand: { type: Schema.Types.String, required: true },
    price: { type: Schema.Types.Number, required: true },
    quantity: { type: Schema.Types.Number, required: true },
    discount: { type: Schema.Types.Number },
    offers: { type: Schema.Types.String, required: true },
    rating: { type: Schema.Types.Number },
    size: { type: Schema.Types.Array },
    imageUrl: [
      {
        cardImage: { type: Schema.Types.String },
        gridImage: [{ type: Schema.Types.String }],
        backdropImage: [{ type: Schema.Types.String }],
      },
    ],
    category: { type: Schema.Types.String },
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
export const Product = mongoose.model<IProduct>("Product", ProductSchema);
// title: string;
// description: string;
// brand: string;
// price: number;
// quantity: number;
// discount: number;
// offers: string;
// imageUrl: ImgUrl;
// rating: number;
// size: Array<string>;
// dateOfCreation: Date;
// dateOfModification: Date;
// type ImgUrl = {
//     cardImage: string;
//     gridImage: Array<string>;
//     backdropImage: Array<string>;
//   };
