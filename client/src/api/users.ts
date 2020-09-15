import axios from "axios";

export const addUser = async (user: any) => {
  let result;

  await axios.post(`http://localhost:8000/api/user`, { user }).then((res) => {
    result = res.data;
    console.log("inside add user");
    console.log(result);
  });
  return result;
};

export const searchUser = async (id: string) => {
  let result;
  await axios.get(`http://localhost:8000/api/user/`).then((res) => {
    result = res.status;
  });
  return result;
};
