import { getLocalStorage, setLocalStorage } from "../common/LocalStorage";
import { deleteSession } from "../common/SesssionStorage";

interface State {
  cart: [];
  user: null;
}

type Actions = {
  type:
    | "ADD_TO_CART"
    | "REMOVE_FROM_CART"
    | "EMPTY_CART"
    | "LOGIN_USER"
    | "LOGOUT_USER";
  item: string;
  user: { email: string; password: string };
};

export const initialState = {
  cart: getLocalStorage("cart"),
  user: null,
};

export const reducer = (state: State, action: Actions) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_CART": {
      setLocalStorage("cart", [...state.cart, action.item]);
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    }
    case "REMOVE_FROM_CART":
      return {};

    case "EMPTY_CART":
      return {};

    case "LOGIN_USER":
      console.log(state.user);
      return { ...state, user: action.user };

    case "LOGOUT_USER": {
      deleteSession("user");
      return { ...state, user: null };
    }

    default:
      return state;
  }
};
