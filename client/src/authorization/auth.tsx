import { searchUser } from "../api/users";
import { setSession } from "../common/SesssionStorage";

export const authUser = async (email: string, password: any) => {
  let response;
  await searchUser(email, password).then((data: any) => {
    if (data == null) response = false;
    else {
      console.log("inside authuser");
      console.log(data.userId);
      setSession("user", {
        userId: data.userId,
        emailId: email,
        username: data.name,
        isAuthenticated: true,
      });

      console.log("isAutheticated");
      response = true;
    }
  });

  return response;
};