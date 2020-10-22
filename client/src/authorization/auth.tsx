import { searchUser } from "../api/users";
import { setLocalStorage, getLocalStorage } from "../utils/localstorage";

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
  let data = await searchUser(props.email, props.password);
  if (data === null) response = false;
  else {
    console.log("inside authuser");
    console.log(data);

    setLocalStorage("user", {
      userId: data._id,
      emailId: props.email,
      username: data.name,
    });

    console.log(getLocalStorage("user"));
    response = true;
  }

  return response;
};
