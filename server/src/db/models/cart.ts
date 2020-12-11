import mongoose, { Schema, Document } from "mongoose";
import { ICart } from "../../interfaces";

const CartSchema: Schema = new Schema(
  {
    userId:{ type: Schema.Types.ObjectId,ref:"User"},
    products :[
     {
       productId:{ type: Schema.Types.ObjectId,ref:"Product"},
       size:{type: Schema.Types.String}
     }
    ]
    
  },
  { timestamps: true }
);
export const Cart = mongoose.model<ICart>("Cart", CartSchema);
