import axios from "axios";
import { IUser } from "../interfaces/UserInterface";

export const addUser = async (user: IUser) => {
  let result;

  result = await axios.post(`http://localhost:8000/api/user`, { user });
  return result.data;
};

export const searchUser = async (email: string, password: string) => {
  let result;
  result = await axios.get(
    `http://localhost:8000/api/user/` + email + `/` + password
  );

  if (result.data.length !== 0) return result.data;
  else return null;
};

//http://localhost:8000/api/user/poojapatel@gmail.com/pooja797
