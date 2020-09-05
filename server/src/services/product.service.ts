import { GetAllProductsModel } from "../models/products.model";
import { GetProductModel } from "../models/products.model";
import { Request } from "express";

export const GetAllProducts = () => {
  try {
    console.log(GetAllProductsModel());
    return GetAllProductsModel();
  } catch (e) {
    throw new Error(e.message);
  }
};

export const GetProduct = (id: any) => {
  try {
    console.log("From service");
    console.log(id);
    console.log("data inside service");
    console.log("");

    let data = GetProductModel(id);
    console.log(GetProductModel(data));
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
