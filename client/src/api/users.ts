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

export const searchUser = async (email: string, password: string) => {
  let result;
  await axios
    .get(`http://localhost:8000/api/user/` + email + `/` + password)
    .then((res) => {
      console.log(res);
      if (res.data.length !== 0) result = res.data;
      else result = null;
    });
  return result;
};

//http://localhost:8000/api/user/poojapatel@gmail.com/pooja797
