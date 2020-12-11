import { getLocalStorage } from "./localstorage";
import { createCart, ICart } from "../api/cart";

type Product = {
  productId: string;
  size: string;
};

export const isCartExists = async (): Promise<boolean> => {
  const cart = getLocalStorage("fashiongalaxycart");

  console.log("iscartExists");

  if (cart !== null) {
    const cartData = {
      userId: getLocalStorage("user").userId,
      products: cart,
    };
    console.log("cart data");
    console.log(cartData);
    await createCart(cartData);
    return true;
  } else {
    return false;
  }
};

export const AddToCart = async (data: Product): Promise<ICart> => {
  const userId = getLocalStorage("user").userId;
  const cartData = { userId: userId, products: [data] };
  const res = await createCart(cartData);
  return res;
};
