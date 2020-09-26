import { searchUser } from "../api/users";
import { setSession } from "../utils/SesssionStorage";

export interface ICredentials {
  email: string;
  password: string;
}
export interface IData {
  userId: string;
  name: string;
}

export const authUser = async (props: ICredentials) => {
  let response;
  await searchUser(props.email, props.password).then((data: IData) => {
    if (data == null) response = false;
    else {
      console.log("inside authuser");
      console.log(data.userId);
      setSession("user", {
        userId: data.userId,
        emailId: props.email,
        username: data.name,
        isAuthenticated: true,
      });

      console.log("isAutheticated");
      response = true;
    }
  });

  return response;
};
