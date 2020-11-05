import { Product } from "../db/models/product";
import { IProduct } from "../interfaces";
import { injectable } from "inversify";


@injectable()
export class ProductsService {
  public getProducts = async (): Promise<IProduct[]> => {
    console.log("ingetProducts");
    try {
      return await Product.find();
    } catch (err) {
      throw err;
    }
  };
 
    public getProductsByIds = async (ids:any): Promise<IProduct[]> => {
      console.log("ingetProducts");
      try {
        return await Product.find({ "_id": { "$in": ids } });
      } catch (err) {
        throw err;
      }
    };

  public getProduct = async (id: string): Promise<IProduct[]> => {
    try {
      return await Product.find({ _id: id });
    } catch (err) {
      throw err;
    }
  };

  public createProduct = async (product: any): Promise<IProduct> => {
    try {
      return await Product.create(product);
    } catch (err) {
      throw err;
    }
  };

  public updateProduct = async (
    id: string,
    product: any
  ): Promise<IProduct | null> => {
    try {
      return await Product.findOneAndUpdate({ _id: id }, product, {
        new: true,
      });
    } catch (err) {
      throw err;
    }
  };

  public deleteProduct = async (id: string): Promise<IProduct | null> => {
    try {
      return await Product.findOneAndDelete({ _id: id });
    } catch (err) {
      throw err;
    }
  };
}
