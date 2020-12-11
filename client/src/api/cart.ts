import axios from "axios";
import IProduct from "./product"
export interface ICartProduct {
  productId: string;
  size: string;
}
export interface ICart {
  userId: string;
  products: Array<ICartProduct>;
}



export const getCartById = async (id: string): Promise<ICartProduct[]> => {
  console.log("In getcart by id");
  const result = await axios.get("http://localhost:8000/carts/" + id);
  console.log(result.data);
  if (result.data) return result.data.products;
  else return [];
};
export const deleteCart = async (
  uid: string,
  pid: string
): Promise<ICart | null> => {
  const result = await axios.delete(
    "http://localhost:8000/carts/" + uid + "/" + pid
  );
  return result.data;
};
export const updateCart = async (
  uid: string,
  pid: string
): Promise<ICart | null> => {
  const result = await axios.put(
    "http://localhost:8000/carts/" + uid + "/" + pid
  );
  return result.data;
};
export const createCart = async (cart: ICart): Promise<ICart> => {
  console.log("inside createcart");
  console.log(cart);
  const result = await axios.post("http://localhost:8000/carts/", cart);
  console.log("inside createCart api");
  console.log(result.data);
  return result.data;
};
