import { Document } from "mongoose";

export interface ICart extends Document {
  productId: String;
 
}
