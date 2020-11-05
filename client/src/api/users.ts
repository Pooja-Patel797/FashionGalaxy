import axios from "axios";

export interface IUser {
  _id ?: string;
  name: string;
  email: string;
  password: string;
}

export const addUser = async (user: IUser): Promise<IUser> => {
  const result = await axios.post(`http://localhost:8000/users`, user);
  return result.data;
};

export const searchUser = async (
  email: string,
  password: string
): Promise<IUser | null> => {
  const result = await axios.get(
    `http://localhost:8000/users/` + email + `/` + password
  );
  console.log(result);
  return result.data;
};
