import { User, sequelize } from "../models/index";
import { v4 as uuid } from "uuid";
import { redis_client } from "../config/server";

export const addUser = async (user: any) => {
  console.log("in service");
  console.log(user.name);
  let queryresponse;
  await getUserByEmail(user.email).then((result) => {
    if (result == true) {
      queryresponse = User.create({
        userId: uuid(),
        name: user.name,
        email: user.email,
        password: user.password,
        isStatus: "active",
        roleRoleId: 2,
      });
      queryresponse = true;
    } else {
      queryresponse = false;
    }
  });
  return queryresponse;
};

export const getAllUser = async (id: any) => {
  const result = await User.findAll();
  if (result != null) redis_client.setex(id, 3600, JSON.stringify(result));
  return result;
};

export const getUserById = async (id: any) => {
  const result = await User.findOne({
    where: { userId: id },
  });
  if (result != null) redis_client.setex(id, 3600, JSON.stringify(result));
  return result;
};
export const getUserByEmail = async (email: any) => {
  const result = await User.findOne({
    where: { email: email },
  });
  if (result != null) return "false";
  return true;
};
export const updateUser = async (id: string, user: any) => {
  const result = await User.update(
    { roleRoleId: user.id },
    { where: { userId: id } }
  );

  return result;
};

export const deleteUser = async (id: string) => {
  const result = await User.destroy({ where: { userId: id } });
  return result;
};
