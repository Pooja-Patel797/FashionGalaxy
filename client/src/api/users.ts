import axios from "axios";
import { IUser } from "../interfaces/UserInterface";

export const addUser = async (user: IUser) => {
  let result;

  result = await axios.post(`http://localhost:8000/users`, user);
  return result.data;
};

export const searchUser = async (email: string, password: string) => {
  let result;
  result = await axios.get(
    `http://localhost:8000/users/` + email + `/` + password
  );
  console.log(result);
  let data = result.data;

  if (data !== null) return data;
  else return null;
};

//http://localhost:8000/api/user/poojapatel@gmail.com/pooja797
