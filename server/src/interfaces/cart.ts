import { Document } from "mongoose";
import {IProduct} from "./product";

export interface ICart extends Document {
  productId: String;
  size:string
}

export interface ICartProduct extends Document {
  product: IProduct,
  size:string
}
