import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import { deleteLocalStorage } from "../utils/localstorage";
import { createCart } from "../api/cart";

export const getInitialState = () => {
  let initialState;
  let cart = getLocalStorage("fashiongalaxycart");
  if (cart) initialState = { cart: cart, isAuthenticated: false };
  else initialState = { cart: [], isAuthenticated: false };
  return initialState;
};

interface State {
  cart: [];
  isAuthenticated: false;
}
type Product = {
  productId: string;
  size: string;
};
type ICart = {
  userId: string;
  products: Array<Product>;
};
type Actions = {
  type:
    | "ADD_TO_CART"
    | "REMOVE_FROM_CART"
    | "EMPTY_CART"
    | "LOGIN_USER"
    | "LOGOUT_USER";
  item: { productId: string; size: string };
  isAuthenticated: boolean;
};

let setCart = async (data: ICart) => {
  let cartdata = await createCart(data);
  return cartdata;
};

export const reducer = (state: State, action: Actions) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("------>");
      console.log(state.cart);
      console.log(action.item);
      if (!state.isAuthenticated) {
        setLocalStorage("fashiongalaxycart", [...state.cart, action.item]);
        return {
          ...state,
          cart: [...state.cart, action.item],
        };
      } else {
        return {
          ...state,
          cart: action.item,
        };
      }
    }

    case "REMOVE_FROM_CART":
      return {};

    case "EMPTY_CART": {
      deleteLocalStorage("fashiongalaxycart");
      console.log("Deleted cart");
      return { ...state, cart: [] };
    }

    case "LOGIN_USER": {
      console.log("userAuthenticated");
      return { ...state, isAuthenticated: action.isAuthenticated };
    }

    case "LOGOUT_USER": {
      console.log("Deleted");
      deleteLocalStorage("user");
      return { ...state, isAuthenticated: false };
    }

    default:
      return state;
  }
};
