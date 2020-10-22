import { getLocalStorage } from "./localstorage";
import { createCart } from "../api/cart";

type Product = {
  productId: string;
  size: string;
};

export const isCartExists = async () => {
  let cart = getLocalStorage("fashiongalaxycart");
  let cartData = {
    userId: getLocalStorage("user").userId,
    products: cart,
  };
  if (cart) {
    console.log("cart data");

    let data = await createCart(cartData);
    return true;
  } else {
    return false;
  }
};

export const AddToCart = async (data: Product) => {
  let userId = getLocalStorage("user").userId;
  let cartData = { userId: userId, products: [data] };
  let res = await createCart(cartData);
  res.data;
};
