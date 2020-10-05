import axios from "axios";
import { IUser } from "../interfaces/UserInterface";

export const getAllProducts = async () => {
  let result;

  result = await axios.get(`http://localhost:8000/products`);
  return result.data;
};

export const getProduct = async (id: string) => {
  let result;

  result = await axios.get(`http://localhost:8000/products/` + id);
  console.log("Product id" + id);
  console.log(result);
  return result.data[0];
};
