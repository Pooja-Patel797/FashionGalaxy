import axios from "axios";
type Product = {
  productId: string;
  size: string;
};
type Cart = {
  userId: string;
  products: Array<Product>;
};

export const getCartById = async (id: string) => {
  console.log("In getcart by id");
  let result = await axios.get("http://localhost:8000/carts/" + id);
  console.log(result.data);
  if (result.data) return result.data.products;
  else return [];
};
export const deleteCart = async (uid: string, pid: string) => {
  let result = await axios.delete(
    "http://localhost:8000/carts/" + uid + "/" + pid
  );
  return result;
};
export const updateCart = async (uid: string, pid: string) => {
  let result = await axios.put(
    "http://localhost:8000/carts/" + uid + "/" + pid
  );
  return result;
};
export const createCart = async (cart: Cart) => {
  console.log("inside createcart");
  console.log(cart);
  let result = await axios.post("http://localhost:8000/carts/", cart);
  console.log("inside createCart api");
  console.log(result.data);
  return result.data;
};
