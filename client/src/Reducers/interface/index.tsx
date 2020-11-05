import { ICartProduct } from "../../api/cart";
// export interface ICart {
//   productId: string;
//   size: string;
// }
export interface IStateCart {
  cart: ICartProduct[];
}

export interface IStateUser {
  isAuthenticated: boolean;
}
export interface IReducer {
  cart: ICartProduct[];
  isAuthenticated: boolean;
}

export interface IActionsCart {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "EMPTY_CART" | "INITIAIZE_CART";
  payload: {
    cart: ICartProduct;
  };
}

export interface IActionsUser {
  type: "LOGIN_USER" | "LOGOUT_USER";
  payload: {
    isAuthenticated: boolean;
  };
}
