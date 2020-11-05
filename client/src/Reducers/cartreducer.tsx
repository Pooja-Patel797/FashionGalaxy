import { getLocalStorage } from "../utils/localstorage";
import { deleteLocalStorage } from "../utils/localstorage";
import { getCartById } from "../api/cart";
import { IActionsCart } from "./interface";
import { ICartProduct } from "../api/cart";

export const getInitialState = (): ICartProduct[] => {
  let initialState;
  const cart: ICartProduct[] = getLocalStorage("fashiongalaxycart");
  if (cart) initialState = cart;
  else initialState = [] as Array<ICartProduct>;

  return initialState;
};

export const CartReducer = (
  state: ICartProduct[],
  action: IActionsCart
): ICartProduct[] | Promise<ICartProduct[]> => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART": {
      console.log("Adding to cart------>");
      console.log(state);
      console.log(action.payload.cart);
      return [...state, action.payload.cart];
    }

    // case "REMOVE_FROM_CART":
    //   //return {};
    //   break;

    case "EMPTY_CART": {
      deleteLocalStorage("fashiongalaxycart");
      console.log("Deleted cart");
      return [];
    }
    case "INITIAIZE_CART":
      {
        console.log("initializing to cart------>");
        const data = (async () => {
          const data = await getCartById(getLocalStorage("user").userId);
          return data;
        })();
        return data;
      }
      break;
    default:
      return state;
      break;
  }
};
