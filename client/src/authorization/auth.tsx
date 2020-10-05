import { searchUser } from "../api/users";
import { setSession, getSession } from "../utils/SesssionStorage";

export interface ICredentials {
  email: string;
  password: string;
}
export interface IData {
  _id: string;
  name: string;
  email: string;
}

export const authUser = async (props: ICredentials) => {
  let response;
  await searchUser(props.email, props.password).then((data: IData) => {
    if (data == null) response = false;
    else {
      console.log("inside authuser");
      console.log(data._id);
      setSession("user", {
        userId: data._id,
        emailId: props.email,
        username: data.name,
        isAuthenticated: true,
      });
      console.log(getSession("user"));
      console.log("isAutheticated");
      response = true;
    }
  });

  return response;
};
