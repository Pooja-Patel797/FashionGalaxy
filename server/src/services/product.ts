import { Product } from "../db/models/product";
import { IProduct } from "../interfaces";
import { injectable } from "inversify";
import { Error, default as mongoose } from "mongoose";

@injectable()
export class ProductsService {
  public async getProducts(): Promise<IProduct[]> {
    console.log("ingetProducts");
    return Product.find()
      .then((data: IProduct[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async getProduct(id: string): Promise<IProduct[]> {
    return Product.find({ _id: id })
      .then((data: IProduct[]) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async createProduct(product: any): Promise<IProduct> {
    return Product.create(product)
      .then((data: IProduct) => {
        console.log(data._id);

        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async updateProduct(id: string, product: any): Promise<IProduct> {
    return Product.findOneAndUpdate({ _id: id }, product, { new: true })
      .then((data: any) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  public async deleteProduct(id: string): Promise<boolean> {
    return Product.findOneAndDelete({ _id: id })
      .then(() => {
        return true;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
