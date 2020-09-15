import { DataTypes } from "sequelize";
import { User } from "./index";

export const RoleModel = (sequelize: any) => {
  const Role = sequelize.define("role", {
    roleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

    roleName: {
      type: DataTypes.STRING(11),
    },
  });

  return Role;
};
