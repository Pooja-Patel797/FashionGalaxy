import { Role } from "../models/index";

export const addRole = async (roleId: String, roleName: String) => {
  const result = await Role.create({
    roleId: roleId,
    roleName: roleName,
  });
  return result;
};
