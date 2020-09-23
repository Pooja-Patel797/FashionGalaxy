import { User, sequelize } from "../models/index";
import { v4 as uuid } from "uuid";
import { Product } from "../models/index";

export const addProduct = async (product: any) => {
  const result = await Product.create({
    productId: uuid(),
    productName: product.productName,
    productDesc: product.productDesc,
    productBrand: product.productBrand,
    productPrice: product.productPrice,
    productQuantity: product.productQuantity,
    discount: product.discount,
    productOffers: product.productOffers,
    productImagePath: product.productImagePath,
    productRating: product.productRating,
    productSize: product.productSize,
  });
  return result;
};

export const getAllProducts = async () => {
  const result = await Product.findAll();
  return result;
};

export const getProductById = async (user: any) => {
  const result = await User.findOne({
    where: { email: user.email, password: user.password },
  });
  return result;
};
