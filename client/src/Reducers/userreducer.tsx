import { deleteLocalStorage } from "../utils/localstorage";
import { IActionsUser } from "./interface";

export const UserReducer = (state: boolean, action: IActionsUser): boolean => {
  console.log(action);

  switch (action.type) {
    case "LOGIN_USER": {
      console.log("userAuthenticated");
      return action.payload.isAuthenticated;
    }

    case "LOGOUT_USER": {
      console.log("Deleted");
      deleteLocalStorage("user");
      deleteLocalStorage("fashiongalaxycart");

      return false;
    }

    default:
      return state;
  }
};
