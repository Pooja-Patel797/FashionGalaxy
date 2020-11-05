import { Cart } from "../db/models/cart";
import { ICart } from "../interfaces";
import { injectable } from "inversify";
import { Error, default as mongoose } from "mongoose";

@injectable()
export class CartsService {
  public getCarts = async (): Promise<ICart[]> => {
    console.log("ingetCarts");
    try {
      return await Cart.find().populate("products.productId");
    } catch (err) {
      throw err;
    }
  };

  public getCart = async (uid: string): Promise<ICart | null> => {
    try {
      return await Cart.findOne({ userId: uid }).populate("products.productId");
    } catch (err) {
      throw err;
    }
  };

  public createOrUpdateCart = async (cart: any): Promise<ICart | null> => {
    let query = { userId: cart.userId };
    let update = { products: [cart.products] };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };
    try {
      return await Cart.findOneAndUpdate(
        { userId: cart.userId },
        {
          $push: {
            products: cart.products,
          },
        },
        { upsert: true, new: true }
      );
    } catch (err) {
      throw err;
    }
  };

  public updateCart = async (id: string, cart: any): Promise<ICart | null> => {
    try {
      return await Cart.findOneAndUpdate({ _id: id }, cart, { new: true });
    } catch (err) {
      return err;
    }
  };

  public async deleteCart(id: string): Promise<ICart | null> {
    try {
      return await Cart.findOneAndDelete({ _id: id });
    } catch (err) {
      return err;
    }
  }
}
