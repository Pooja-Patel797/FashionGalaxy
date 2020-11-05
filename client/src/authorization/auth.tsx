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

export const authUser = async (props: ICredentials): Promise<boolean> => {
  console.log("start of authUser");
  console.log(props);
  const data = await searchUser(props.email, props.password);
  if (data === null) return false;
  else {
    console.log("inside authuser");
    console.log(data);

    setLocalStorage("user", {
      userId: data._id,
      emailId: props.email,
      username: data.name,
    });

    console.log(getLocalStorage("user"));
    return true;
  }
};
