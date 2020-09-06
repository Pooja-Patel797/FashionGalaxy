import { DataTypes } from "sequelize";
import { Users } from "./index";

export const RoleModel = (sequelize: any) => {
  const Role = sequelize.define(
    "role",
    {
      roleId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },

      roleName: {
        type: DataTypes.STRING(11),
      },
    },
    {
      timestamps: false,
    }
  );

  return Role;
};
